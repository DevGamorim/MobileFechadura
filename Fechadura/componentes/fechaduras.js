import {StyleSheet, View, Text, Image} from 'react-native';
import logoPadoBranco1 from '../assets/images/logoPadoBranco1.png';

export function fechaduras() {
  return(
    <div className="w-[375px] h-[812px] relative bg-zinc-950 rounded-[29px]">
        <div className="w-[375px] h-[636px] left-0 top-[176px] absolute bg-gray-200 rounded-tl-[40px] rounded-tr-[40px]" />
        <div className="w-[30px] h-[3px] left-[172px] top-[189px] absolute bg-neutral-200 rounded-[100px]" />
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
        <div className="w-[198px] h-[37px] left-[79px] top-[60px] absolute text-center text-white text-xl font-medium font-['Poppins']">Fechaduras</div>
        <div className="left-[24px] top-[200px] absolute text-zinc-950 text-base font-medium font-['Caros'] leading-none">Recente</div>
        <div className="w-[37px] h-[37px] left-[16px] top-[56px] absolute origin-top-left rotate-90" />
        <div className="w-[327px] h-11 left-[22px] top-[113px] absolute">
            <div className="w-[327px] h-11 left-0 top-0 absolute">
                <div className="w-[327px] h-11 left-0 top-0 absolute bg-gray-100 rounded-xl" />
                <div className="w-6 h-[0px] left-[90px] top-[10px] absolute origin-top-left rotate-90 border border-teal-700"></div>
                <div className="w-6 h-6 left-[12px] top-[10px] absolute flex-col justify-start items-start inline-flex" />
                <div className="w-6 h-6 left-[293px] top-[10px] absolute" />
            </div>
            <div className="w-[93px] h-6 left-[45px] top-[18px] absolute text-black text-[15px] font-normal font-['Inter'] leading-3">ABC1</div>
        </div>
        <div className="w-[337px] h-[117px] left-[20px] top-[232px] absolute">
            <div className="w-[333px] h-24 left-0 top-0 absolute bg-white rounded-[25px]" />
            <div className="w-[85px] h-6 left-[59px] top-[27px] absolute text-black text-xl font-medium font-['Inter'] leading-3">ABC 1</div>
            <div className="w-[153px] h-[50px] left-[59px] top-[67px] absolute text-neutral-500 text-[11px] font-medium font-['Inter'] leading-3">Fechadura aberta</div>
            <div className="w-11 h-[15px] left-[293px] top-[27px] absolute text-black text-[10px] font-semibold font-['Inter'] leading-3">100%</div>
            <img className="w-[23px] h-[23px] left-[265px] top-[22px] absolute" src="https://via.placeholder.com/23x23" />
            <img className="w-8 h-8 left-[18px] top-[18px] absolute" src="https://via.placeholder.com/32x32" />
        </div>
        <div className="w-[337px] h-[117px] left-[20px] top-[356px] absolute">
            <div className="w-[333px] h-24 left-0 top-0 absolute bg-white rounded-[25px]" />
            <div className="w-[85px] h-6 left-[59px] top-[27px] absolute text-black text-xl font-medium font-['Inter'] leading-3">ABC 2</div>
            <div className="w-[153px] h-[50px] left-[59px] top-[67px] absolute text-neutral-500 text-[11px] font-medium font-['Inter'] leading-3">Fechadura fechada</div>
            <div className="w-11 h-[15px] left-[293px] top-[27px] absolute text-black text-[10px] font-semibold font-['Inter'] leading-3">52%</div>
            <img className="w-[23px] h-[23px] left-[265px] top-[22px] absolute" src="https://via.placeholder.com/23x23" />
        </div>
        <div className="w-[337px] h-[117px] left-[20px] top-[480px] absolute">
            <div className="w-[333px] h-24 left-0 top-0 absolute bg-white rounded-[25px]" />
            <div className="w-[85px] h-6 left-[59px] top-[27px] absolute text-black text-xl font-medium font-['Inter'] leading-3">ABC 3</div>
            <div className="w-[153px] h-[50px] left-[59px] top-[67px] absolute text-neutral-500 text-[11px] font-medium font-['Inter'] leading-3">Fechadura fechada</div>
            <div className="w-11 h-[15px] left-[293px] top-[27px] absolute text-black text-[10px] font-semibold font-['Inter'] leading-3">49%</div>
            <div className="w-8 h-8 left-[18px] top-[18px] absolute" />
            <img className="w-[23px] h-[23px] left-[265px] top-[22px] absolute" src="https://via.placeholder.com/23x23" />
        </div>
        <div className="w-[337px] h-[117px] left-[20px] top-[604px] absolute">
            <div className="w-[333px] h-24 left-0 top-0 absolute bg-white rounded-[25px]" />
            <div className="w-[85px] h-6 left-[59px] top-[27px] absolute text-black text-xl font-medium font-['Inter'] leading-3">ABC 4</div>
            <div className="w-[153px] h-[50px] left-[59px] top-[67px] absolute text-neutral-500 text-[11px] font-medium font-['Inter'] leading-3">Fechadura fechada</div>
            <div className="w-[153px] h-[50px] left-[59px] top-[67px] absolute text-neutral-500 text-[11px] font-medium font-['Inter'] leading-3">Fechadura fechada</div>
            <div className="w-11 h-[15px] left-[293px] top-[27px] absolute text-black text-[10px] font-semibold font-['Inter'] leading-3">98%</div>
            <img className="w-[23px] h-[23px] left-[265px] top-[22px] absolute" src="https://via.placeholder.com/23x23" />
        </div>
        <img className="w-8 h-8 left-[38px] top-[372px] absolute" src="https://via.placeholder.com/32x32" />
        <img className="w-8 h-8 left-[38px] top-[498px] absolute" src="https://via.placeholder.com/32x32" />
        <img className="w-8 h-8 left-[38px] top-[623px] absolute" src="https://via.placeholder.com/32x32" />
    </div>
  );
}