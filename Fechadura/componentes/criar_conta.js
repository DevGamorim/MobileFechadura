import {StyleSheet, View, Text, Image} from 'react-native';
import logoPadoBranco1 from '../assets/images/logoPadoBranco1.png';

export function criar_conta() {
  return (
    <div className="w-[375px] h-[812px] relative bg-stone-950 rounded-[29px]">
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
    <div className="left-[62px] top-[145px] absolute text-white text-lg font-semibold font-['Caros'] leading-[18px]">Cadastre-se com seu Email</div>
    <div className="w-[293px] left-[31px] top-[181px] absolute text-center text-white text-sm font-['Circular Std'] leading-tight tracking-tight">Cadastre-se e desbloqueie conforto.</div>
    <div className="h-[58px] left-[24px] top-[369px] absolute">
        <div className="left-0 top-0 absolute text-center text-white text-sm font-medium font-['Circular Std'] leading-[14px] tracking-tight">Seu E-mail</div>
        <div className="w-[327px] h-[0px] left-0 top-[58px] absolute border border-neutral-300"></div>
    </div>
    <div className="h-[58px] left-[24px] top-[281px] absolute">
        <div className="left-0 top-0 absolute text-center text-white text-sm font-medium font-['Circular Std'] leading-[14px] tracking-tight">Seu Nome</div>
        <div className="w-[327px] h-[0px] left-0 top-[58px] absolute border border-neutral-300"></div>
    </div>
    <div className="h-[58px] left-[24px] top-[468px] absolute">
        <div className="left-0 top-0 absolute text-white text-sm font-medium font-['Circular Std'] leading-[14px] tracking-tight">Senha</div>
        <div className="w-[327px] h-[0px] left-0 top-[58px] absolute border border-neutral-300"></div>
    </div>
    <div className="h-[58px] left-[24px] top-[556px] absolute">
        <div className="left-0 top-0 absolute text-white text-sm font-medium font-['Circular Std'] leading-[14px] tracking-tight">Confirmar Senha</div>
        <div className="w-[327px] h-[0px] left-0 top-[58px] absolute border border-neutral-300"></div>
    </div>
    <div className="w-[322px] h-[42px] left-[26px] top-[727px] absolute">
        <div className="w-[322px] h-[42px] left-0 top-0 absolute bg-white rounded-[10px]" />
        <div className="left-[114px] top-[13px] absolute text-right text-black text-base font-medium font-['Poppins'] leading-none">Criar Conta</div>
    </div>
    </div>
  );
}