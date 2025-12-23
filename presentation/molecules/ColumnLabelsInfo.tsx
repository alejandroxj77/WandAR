import React from 'react';
import { StyleProp, TextStyle, View } from 'react-native';
import Label from '../atoms/Label';
import Money from '../atoms/icons/money';
import Sell from '../atoms/icons/sell';

interface Props {
    styleText1?: StyleProp<TextStyle>,
    text1: string,
    styleText2?: StyleProp<TextStyle>,
    text2: string,
    image?: 'Sell' | 'Money';
}

export const ColumnLabelsInfo = ({ styleText1, text1, styleText2, text2, image }: Props) => {
  return (
    <View style={{alignItems: 'center'}}>
        {
            image == "Sell" && <Sell/>
        }
        {
            image == "Money" && <Money/>
        }
        <Label style={[styleText1, ]}>
            {text1}
        </Label>
        <Label style={[styleText2, ]}>
            {text2}
        </Label>
    </View>
  );
};