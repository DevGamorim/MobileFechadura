import {StyleSheet, View, Text, Image} from 'react-native';
import logoPadoBranco1 from '../assets/images/logoPadoBranco1.png';

export function nova_fechadura() {
    return (
    <div className="w-[390px] h-[812px] relative bg-white rounded-[29px]">
        <div className="w-[267px] h-[68px] left-[27px] top-[104px] absolute text-neutral-500 text-3xl font-medium font-['Poppins']">Nova fechadura</div>
        <div className="w-[124px] h-[1.92px] left-[133px] top-[789.87px] absolute bg-sky-900 rounded-[10px]" />
        <div className="w-10 h-[19.24px] left-[27px] top-[186.64px] absolute text-black text-[13px] font-medium font-['Poppins']">Titulo</div>
        <div className="w-[130px] h-[19.24px] left-[27px] top-[283.82px] absolute text-black text-[13px] font-medium font-['Poppins']">Senha para acesso</div>
        <div className="w-[337px] h-[0px] left-[26px] top-[249.18px] absolute border border-black"></div>
        <div className="w-[337px] h-[0px] left-[26px] top-[346.35px] absolute border border-black"></div>
        <div className="w-[337px] h-[29px] left-[26px] top-[217px] absolute text-black text-xl font-medium font-['Poppins']">Entrada Principal</div>
        <div className="w-[207px] h-[42px] left-[26px] top-[381px] absolute bg-neutral-500 rounded-[10px]" />
        <div className="w-[174px] h-[22px] left-[78px] top-[393px] absolute text-white text-[15px] font-medium font-['Poppins']">Adicionar usuarios</div>
        <div className="w-[207px] h-[42px] left-[26px] top-[455px] absolute bg-neutral-500 rounded-[10px]" />
        <div className="w-[174px] h-[22px] left-[42px] top-[467px] absolute text-white text-[15px] font-medium font-['Poppins']">Gerar acesso limitado</div>
        <div className="left-[34px] top-[729px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-[322px] h-[42px] relative">
                <div className="w-[322px] h-[42px] left-0 top-0 absolute bg-neutral-500 rounded-[10px]" />
                <div className="left-[137px] top-[9px] absolute text-white text-[15px] font-medium font-['Poppins']">Salvar</div>
            </div>
        </div>
        <div className="w-[153px] h-[19px] left-[22px] top-[545px] absolute text-black text-[13px] font-medium font-['Poppins']">Data de Validade</div>
        <div className="w-[337px] h-[0px] left-[21px] top-[606.35px] absolute border border-black"></div>
        <div className="w-[91px] h-[23.09px] left-[21px] top-[575.63px] absolute text-black text-base font-medium font-['Poppins']">19/06/2023</div>
        <img className="w-7 h-7 left-[323px] top-[571px] absolute" src="https://via.placeholder.com/28x28" />
        <div className="w-[375px] h-11 left-0 top-[4px] absolute backdrop-blur-[20px]">
            <img className="w-[17px] h-[10.67px] left-[284px] top-[17.67px] absolute" src="https://via.placeholder.com/17x11" />
            <img className="w-[15.33px] h-[11px] left-[306px] top-[17.33px] absolute" src="https://via.placeholder.com/15x11" />
            <div className="w-[24.66px] h-[11px] left-[326px] top-[17px] absolute">
                <div className="w-[22px] h-[11px] left-0 top-0 absolute opacity-30 rounded-sm border border-black" />
                <div className="w-[18px] h-[7px] left-[2px] top-[2px] absolute bg-black rounded-sm" />
            </div>
            <div className="w-[54px] pt-1.5 left-[21px] top-[7px] absolute justify-center items-center inline-flex">
                <div className="w-[54px] text-center text-black text-[15px] font-medium font-['Roboto'] leading-tight">9:41</div>
            </div>
        </div>
    </div>
    );
}