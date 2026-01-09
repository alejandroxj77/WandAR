import { FriendEntity } from '@/data/datasources/entities/socialDataSourceEntity';
import { SocialDataSourceImpl } from '@/data/datasources/implementations/socialDataSourceImpl';
import { SocialRepositoryImpl } from '@/data/repositories/socialRepositoryImpl';
import { useLoader } from '@/shared/context/loaderContext';
import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import Toast from 'react-native-toast-message';
import acceptFriendRequestUseCase from '../useCases/acceptFriendRequestUseCase';
import declineFriendRequestUseCase from '../useCases/declineFriendRequestUseCase';
import getFriendsUseCase from '../useCases/getFriendsUseCase';
import postRequestFriendUseCase from '../useCases/postRequestFriendUseCase';

type SocialProviderProps = {
    children: ReactNode,
}

type SocialContextType = {
    friends: Array<FriendEntity>;
    getFriends: () => Promise<boolean>;
    requestFriend: (addresseeId: string) => Promise<boolean>;
    acceptFriend: (requestId: string) => Promise<boolean>;
    declineFriend: (requestId: string) => Promise<boolean>;
};

const SocialContext = createContext<SocialContextType>({
    friends: [],
    getFriends: async () => true,
    requestFriend: async () => true,
    acceptFriend: async () => true,
    declineFriend: async () => true,
});

const socialRepository = new SocialRepositoryImpl(new SocialDataSourceImpl());

export const SocialProvider = ({ children }: SocialProviderProps) => {
    const [friends, setFriends] = useState([] as Array<FriendEntity>);
    const { showLoader, hideLoader } = useLoader();

    const getFriends = async (): Promise<boolean> => {
        try {
            showLoader({ text: '' });
            const result = await getFriendsUseCase({
                socialRepository,
            });
            setFriends(result);
            return true;
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Error al obtener amigos',
                text2: error?.toString(),
            });
            return false;
        } finally {
            hideLoader();
        }
    };

    const requestFriend = async (addresseeId: string): Promise<boolean> => {
        try {
            showLoader({ text: '' });
            const success = await postRequestFriendUseCase({
                socialRepository,
                addresseeId
            });
            
            if (success) {
                Toast.show({ type: 'success', text1: 'Solicitud enviada correctamente' });
            }
            return success;
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Error al enviar solicitud',
                text2: error?.toString(),
            });
            return false;
        } finally {
            hideLoader();
        }
    };

    const acceptFriend = async (requestId: string): Promise<boolean> => {
        try {
            showLoader({ text: '' });
            const success = await acceptFriendRequestUseCase({
                socialRepository,
                requestId
            });

            if (success) {
                Toast.show({ type: 'success', text1: 'Friend request accepted successfully' });
                await getFriendsUseCase({ socialRepository }).then(setFriends); 
            }
            return success;
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Error al aceptar',
                text2: error?.toString(),
            });
            return false;
        } finally {
            hideLoader();
        }
    };

    const declineFriend = async (requestId: string): Promise<boolean> => {
        try {
            showLoader({ text: '' });
            const success = await declineFriendRequestUseCase({
                socialRepository,
                requestId
            });

            if (success) {
                 Toast.show({ type: 'info', text1: 'Friend request declined successfully' });
            }
            return success;
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: 'Error al rechazar',
                text2: error?.toString(),
            });
            return false;
        } finally {
            hideLoader();
        }
    };

    const socialValue = useMemo(() => ({
        friends,
        getFriends,
        requestFriend,
        acceptFriend,
        declineFriend,
    }), [friends]);

    return (
        <SocialContext value={socialValue}>
            {children}
        </SocialContext>
    );
};

export const useSocial = () => useContext(SocialContext);