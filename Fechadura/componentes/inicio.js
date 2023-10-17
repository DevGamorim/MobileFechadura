import {StyleSheet, View, Text, Image} from 'react-native';
import logoPadoBranco1 from '../assets/images/logoPadoBranco1.png';

export function inicio() {
  return (
    <div className="w-[375px] h-[812px] pb-[379px] bg-stone-950 rounded-[29px] flex-col justify-start items-center gap-[334px] inline-flex">
    <div className="w-[375px] h-11 relative backdrop-blur-[20px] flex-col justify-start items-start flex">
        <div className="w-[54px] pt-1.5 justify-center items-center inline-flex">
            <div className="w-[54px] text-center text-white text-[15px] font-medium font-['Roboto'] leading-tight">9:41</div>
        </div>
        <div className="w-[24.66px] h-[11px] relative">
            <div className="w-[22px] h-[11px] left-0 top-0 absolute opacity-30 rounded-sm border border-white" />
            <div className="w-[18px] h-[7px] left-[2px] top-[2px] absolute bg-white rounded-sm" />
        </div>
        <img className="w-[15.33px] h-[11px]" src="https://via.placeholder.com/15x11" />
        <img className="w-[17px] h-[10.67px]" src="https://via.placeholder.com/17x11" />
    </div>
    <Image source={{uri: logoPadoBranco1}} style={{width: 296, height: 55}} contentFit="cover"/>
</div>
  );
}