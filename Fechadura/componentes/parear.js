import {StyleSheet, View, Text, Image} from 'react-native';
import logoPadoBranco1 from '../assets/images/logoPadoBranco1.png';

export function parear() {
    return (
    <div className="w-[390px] h-[812px] relative bg-stone-950 rounded-[29px]">
        <div className="w-[163px] h-[28.86px] left-[113px] top-[46.52px] absolute bg-neutral-500 rounded-[20px]" />
        <div className="w-[88px] h-[28.86px] left-[113px] top-[46.52px] absolute bg-white rounded-[20px]" />
        <div className="w-[54px] h-[16.36px] left-[133px] top-[52.29px] absolute text-red-600 text-[11px] font-medium font-['Poppins']">Adicionar</div>
        <div className="w-8 h-[16.36px] left-[217px] top-[52.29px] absolute text-white text-[11px] font-medium font-['Poppins']">Editar</div>
        <div className="w-[30px] h-[28.86px] left-[333px] top-[46.52px] absolute">
            <div className="w-[11px] h-[10.58px] left-[19px] top-0 absolute bg-red-600 rounded-full" />
        </div>
        <div className="w-[336px] h-[336px] left-[27px] top-[226px] absolute bg-stone-950 rounded-full border-2 border-zinc-300" />
        <div className="left-[71px] top-[612px] absolute text-white text-2xl font-medium font-['Outfit']">Parear nova fechadura</div>
        <img className="w-[100px] h-[100px] left-[132px] top-[347px] absolute" src="https://via.placeholder.com/100x100" />
        <div className="w-[322px] h-[42px] left-[35px] top-[729px] absolute">
            <div className="w-[322px] h-[42px] left-0 top-0 absolute bg-white rounded-[10px]" />
            <div className="left-[85px] top-[13px] absolute text-right text-black text-base font-medium font-['Poppins'] leading-none">Buscar fechaduras</div>
        </div>
        <div className="w-[375px] h-11 left-0 top-0 absolute backdrop-blur-[20px]">
            <img className="w-[17px] h-[10.67px] left-[284px] top-[17.67px] absolute" src="https://via.placeholder.com/17x11" />
            <img className="w-[15.33px] h-[11px] left-[306px] top-[17.33px] absolute" src="https://via.placeholder.com/15x11" />
            <div className="w-[24.66px] h-[11px] left-[326px] top-[17px] absolute">
                <div className="w-[22px] h-[11px] left-0 top-0 absolute opacity-30 rounded-sm border border-white" />
                <div className="w-[18px] h-[7px] left-[2px] top-[2px] absolute bg-white rounded-sm" />
            </div>
            <div className="w-[54px] pt-1.5 left-[21px] top-[7px] absolute justify-center items-center inline-flex">
                <div className="w-[54px] text-center text-white text-[15px] font-medium font-['Roboto'] leading-tight">9:41</div>
            </div>
        </div>
    </div>
    );
}