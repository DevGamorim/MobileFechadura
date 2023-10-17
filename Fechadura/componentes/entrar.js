import {StyleSheet, View, Text, Image} from 'react-native';
import logoPadoBranco1 from '../assets/images/logoPadoBranco1.png';

export function entrar() {
  return(
    <div className="w-[375px] h-[812px] relative bg-stone-950 rounded-[29px]">
        <div className="w-[327px] h-12 left-[24px] top-[698px] absolute">
            <div className="left-[138px] top-[16px] absolute text-right text-neutral-500 text-base font-semibold font-['Caros'] leading-none">Entrar</div>
        </div>
        <div className="w-[89px] h-[21px] left-[107px] top-[133px] absolute">
            <div className="left-[1px] top-0 absolute text-white text-lg font-bold font-['Outfit'] leading-[18px]">Entrar  em </div>
        </div>
        <div className="w-[293px] left-[41px] top-[182px] absolute text-center text-zinc-400 text-sm font-normal font-['Outfit'] leading-tight tracking-tight">Bem vindo de volta! Faça login usando sua conta social ou e-mail para continuar conosco.</div>
        <div className="w-[315px] left-[30px] top-[330px] absolute">
            <div className="w-[132px] h-[0px] left-0 top-[7px] absolute opacity-50 border border-neutral-300"></div>
            <div className="w-[132px] h-[0px] left-[183px] top-[7px] absolute opacity-50 border border-neutral-300"></div>
            <div className="left-[147px] top-0 absolute text-center text-zinc-400 text-sm font-['Circular Std'] underline leading-[14px] tracking-tight">OU</div>
        </div>
        <div className="left-[129px] top-[761px] absolute text-neutral-300 text-sm font-normal font-['Outfit'] leading-[14px] tracking-tight">Esqueceu a senha?</div>
        <div className="w-[328px] h-[146px] left-[30px] top-[374px] absolute">
            <div className="left-[1px] top-0 absolute text-center text-zinc-400 text-sm font-medium font-['Circular Std'] leading-[14px] tracking-tight">E-mail</div>
            <div className="w-[327px] h-[0px] left-[1px] top-[58px] absolute border border-neutral-300"></div>
            <div className="w-[327px] h-[58px] left-0 top-[88px] absolute">
                <div className="left-0 top-0 absolute"><span style="text-white text-sm font-medium font-['Circular Std'] leading-[14px] tracking-tight">S</span><span style="text-white text-sm font-medium font-['Circular Std'] leading-[14px] tracking-tight">enha</span></div>
                <div className="w-[327px] h-[0px] left-0 top-[58px] absolute border border-neutral-300"></div>
            </div>
            <div className="w-[327px] h-[58px] left-0 top-0 absolute">
                <div className="left-0 top-0 absolute text-center text-white text-sm font-medium font-['Circular Std'] leading-[14px] tracking-tight">E-mail</div>
                <div className="w-[327px] h-[0px] left-0 top-[58px] absolute border border-neutral-300"></div>
            </div>
        </div>
        <div className="w-12 h-12 left-[163px] top-[252px] absolute">
            <div className="w-12 h-12 left-0 top-0 absolute bg-stone-950 rounded-full border border-white" />
            <div className="w-[46px] h-9 left-[1px] top-[6px] absolute">
                <div className="w-[22.70px] h-[23.16px] left-[11.87px] top-[6.64px] absolute">
                </div>
            </div>
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
        <div className="w-6 h-6 left-[24px] top-[61px] absolute origin-top-left rotate-90" />
        <img className="w-[75px] h-3.5 left-[204px] top-[135px] absolute" src="https://via.placeholder.com/75x14" />
    </div>     
    );
}