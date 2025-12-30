import LinearGradientBackground from '@/presentation/atoms/shared/LinearGradientBackground';
import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Modal, Pressable, StyleSheet } from 'react-native';

interface ModalOptions {
  content: ReactNode;
  dismissible?: boolean;
  fullScreen?: boolean;
}

type ModalContextType = {
  showModal: (options: ModalOptions) => void;
  hideModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState<ModalOptions | null>(null);

  const showModal = (opts: ModalOptions) => {
    setOptions(opts);
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
    setOptions(null);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}

      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={hideModal}
        style={{zIndex:2}}
      >
        {
            options?.fullScreen == true
            ? options?.content
            : <Pressable 
                    style={styles.overlay} 
                    onPress={() => options?.dismissible !== false && hideModal()}
                >
                <Pressable onPress={(e) => e.stopPropagation()}> 
                  <LinearGradientBackground style={styles.contentContainer}>
                      {options?.content}
                  </LinearGradientBackground>
              </Pressable>
            </Pressable>
        }
      </Modal>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal debe usarse dentro de ModalProvider');
  return context;
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '85%',
    height: 400,
    flex: undefined,
    borderRadius: 25,
    backgroundColor: 'red'
  },
});