import {StyleSheet, View, Text, Image} from 'react-native';
import logoPadoBranco1 from '../assets/images/logoPadoBranco1.png';

export function tela_busca() {
    return (
    <div className="w-[390px] h-[812px] relative bg-stone-950 rounded-[29px]">
        <div className="left-[28px] top-[59px] absolute justify-start items-start gap-2.5 inline-flex">
            <div className="w-12 h-12 relative">
                <div className="w-12 h-12 left-0 top-0 absolute bg-zinc-300 bg-opacity-20 rounded-full" />
            </div>
        </div>
        <img className="w-[334px] h-[334px] left-[28px] top-[196px] absolute rounded-full border-2 border-white" src="https://via.placeholder.com/334x334" />
        <div className="left-[36px] top-[550px] absolute text-white text-2xl font-medium font-['Poppins']">Buscando por dispositivos</div>
        <img className="w-[17px] h-[10.67px] left-[285px] top-[21.67px] absolute" src="https://via.placeholder.com/17x11" />
        <img className="w-[15.33px] h-[11px] left-[307px] top-[21.33px] absolute" src="https://via.placeholder.com/15x11" />
        <div className="w-[24.66px] h-[11px] left-[327px] top-[21px] absolute">
            <div className="w-[22px] h-[11px] left-0 top-0 absolute opacity-30 rounded-sm border border-white" />
            <div className="w-[18px] h-[7px] left-[2px] top-[2px] absolute bg-white rounded-sm" />
        </div>
        <div className="w-[54px] pt-1.5 left-[22px] top-[11px] absolute justify-center items-center inline-flex">
            <div className="w-[54px] text-center text-white text-[15px] font-medium font-['Roboto'] leading-tight">9:41</div>
        </div>
        <img className="w-[161px] h-[30px] left-[114px] top-[68px] absolute" src="https://via.placeholder.com/161x30" />
    </div>
    );
}