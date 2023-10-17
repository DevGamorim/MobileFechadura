import {StyleSheet, View, Text, Image} from 'react-native';
import logoPadoBranco1 from '../assets/images/logoPadoBranco1.png';

export function permissoes() {
    return (
    <div className="w-[390px] h-[812px] relative bg-black rounded-[29px]">
        <div className="w-[346.34px] h-[582px] left-[20px] top-[114px] absolute">
            <div className="w-[346.34px] h-[0px] left-0 top-[303.32px] absolute shadow border border-white"></div>
            <div className="w-[346.34px] h-[0px] left-0 top-[582px] absolute shadow border border-white"></div>
            <div className="w-[346.34px] h-[0px] left-0 top-0 absolute shadow border border-white"></div>
            <div className="w-[250.52px] h-[61.19px] left-[61.97px] top-[336.80px] absolute text-white text-[15px] font-semibold font-['Radio Canada']">Ana<br/></div>
            <div className="w-[250.52px] h-[55.41px] left-[61.97px] top-[395.68px] absolute text-white text-[15px] font-semibold font-['Radio Canada']">Bianca</div>
            <div className="w-[88.89px] h-[31.17px] left-[61.97px] top-[454.56px] absolute text-white text-[15px] font-semibold font-['Radio Canada']">Maria</div>
            <div className="w-[147.77px] h-[25.40px] left-[61.97px] top-[520.37px] absolute text-white text-[15px] font-semibold font-['Radio Canada']">Kaike</div>
            <img className="w-[39.25px] h-[39.25px] left-[4.24px] top-[446.48px] absolute rounded-[145px] shadow" src="https://via.placeholder.com/39x39" />
            <img className="w-[38.10px] h-[38.10px] left-[6.55px] top-[516.90px] absolute rounded-[153px] shadow" src="https://via.placeholder.com/38x38" />
            <img className="w-[39.25px] h-[39.25px] left-[5.40px] top-[384.14px] absolute rounded-[223px] shadow" src="https://via.placeholder.com/39x39" />
            <img className="w-[38.10px] h-[38.10px] left-[5.40px] top-[329.88px] absolute rounded-[165px] shadow" src="https://via.placeholder.com/38x38" />
        </div>
        <div className="w-[198px] h-[37px] left-[96px] top-[60px] absolute text-center text-white text-xl font-medium font-['Poppins']">Seu dispositivo</div>
        <div className="w-[181px] h-[29px] left-[73px] top-[60px] absolute mix-blend-darken text-white text-xl font-semibold font-['Radio Canada']">asdasda</div>
        <div className="w-[32.33px] h-[32.33px] left-[28.86px] top-[55.47px] absolute">
            <div className="w-[32.33px] h-[32.33px] left-0 top-0 absolute bg-white rounded-full" />
        </div>
        <div className="w-[246px] h-[617.65px] left-[48px] top-[141.35px] absolute">
            <div className="w-[146px] h-[18px] left-[72px] top-[162.65px] absolute text-center text-white text-sm font-semibold font-['Radio Canada']">Log de acessos </div>
            <div className="w-[198px] h-[37px] left-[46px] top-[117.65px] absolute text-center text-white text-xl font-semibold font-['Radio Canada']">Entrada Principal</div>
            <div className="w-[198px] h-[37px] left-0 top-[580.65px] absolute text-center text-white text-xl font-normal font-['Radio Canada'] leading-[35px]">Configuração</div>
            <div className="w-[198px] h-[37px] left-[48px] top-[205.65px] absolute text-center text-white text-xl font-semibold font-['Radio Canada']">Usuários com acesso</div>
            <div className="w-[101.59px] h-[101.59px] left-[94px] top-0 absolute bg-white rounded-full" />
            <img className="w-[58px] h-[58px] left-[116px] top-[20.65px] absolute" src="https://via.placeholder.com/58x58" />
        </div>
        <div className="w-[375px] h-11 left-[8px] top-[1px] absolute backdrop-blur-[20px]">
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
        <img className="w-[31px] h-[31px] left-[34px] top-[722px] absolute" src="https://via.placeholder.com/31x31" />
    </div>
    );
}