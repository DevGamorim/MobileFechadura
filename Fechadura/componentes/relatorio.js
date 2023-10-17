import {StyleSheet, View, Text, Image} from 'react-native';
import logoPadoBranco1 from '../assets/images/logoPadoBranco1.png';

export function relatorio() {
    return (
    <div className="w-[390px] h-[812px] relative bg-stone-950 rounded-[29px]">
        <div className="w-[245px] h-[31px] left-[44px] top-[607px] absolute text-white text-[13px] font-normal font-['Poppins']">Mostrar dados de menos de 30 dias</div>
        <div className="w-[195px] h-[31px] left-[44px] top-[629px] absolute text-white text-[13px] font-normal font-['Poppins']">Mostrar  todos os dispositivos</div>
        <div className="h-[22px] pr-[19px] pt-1 pb-[5px] left-[305px] top-[607px] absolute justify-start items-center inline-flex">
            <div className="w-[26px] h-[13px] relative flex-col justify-start items-start flex">
                <div className="w-[26px] h-[13px] bg-zinc-300 rounded-[123px]" />
                <div className="w-[11px] h-[11px] bg-white rounded-full" />
            </div>
        </div>
        <div className="w-[26px] h-3.5 left-[304px] top-[631px] absolute">
            <div className="w-[26px] h-3.5 left-0 top-0 absolute bg-zinc-300 rounded-[123px]" />
            <div className="w-[11px] h-[11.85px] left-[1px] top-[1.08px] absolute bg-white rounded-full" />
        </div>
        <div className="w-[345.41px] h-[448.20px] left-[24.44px] top-[100.30px] absolute">
            <div className="w-[345.41px] h-[0px] left-0 top-0 absolute shadow border border-zinc-300"></div>
            <div className="w-[100.02px] h-[35.06px] left-[19.59px] top-[123.81px] absolute text-white text-sm font-normal font-['Poppins']">Números de permissões </div>
            <div className="w-[37.12px] h-[30.93px] left-[114.45px] top-[125.87px] absolute text-white text-base font-normal font-['Poppins']">8</div>
            <div className="w-[51.55px] h-[30.93px] left-[114.56px] top-[174.70px] absolute text-white text-base font-normal font-['Poppins']">7:59</div>
            <div className="w-[77.33px] h-[30.93px] left-[268.08px] top-[174.24px] absolute text-white text-base font-normal font-['Poppins']">23:40</div>
            <div className="w-[50.52px] h-[30.93px] left-[268.56px] top-[125.70px] absolute text-white text-base font-normal font-['Poppins']">159</div>
            <div className="w-[87.64px] h-[40.21px] left-[176.56px] top-[123.70px] absolute text-white text-sm font-normal font-['Poppins']">Número de aberturas</div>
            <div className="w-[88px] h-10 left-[176.56px] top-[169.70px] absolute text-white text-sm font-normal font-['Poppins']">Horário de menor fluxo</div>
            <div className="w-[87.64px] h-[40.21px] left-[19.56px] top-[175.70px] absolute text-white text-sm font-normal font-['Poppins']">Horário de maior fluxo</div>
            <div className="w-[286.64px] h-[32.99px] left-[15.56px] top-[398.70px] absolute text-white text-[15px] font-normal font-['Poppins']">Medidores</div>
            <div className="w-[315.51px] h-[16.50px] left-[15.56px] top-[431.70px] absolute bg-zinc-300 rounded-[87px]" />
            <div className="w-[300.05px] h-[9.28px] left-[23.81px] top-[433.76px] absolute">
                <div className="w-[86.61px] h-[9.28px] left-[213.44px] top-0 absolute text-neutral-500 text-[8px] font-normal font-['Radley']">20000 points</div>
                <div className="w-[86.61px] h-[9.28px] left-[120.64px] top-0 absolute text-neutral-500 text-[8px] font-normal font-['Radley']">10000 points</div>
                <div className="w-[86.61px] h-[9.28px] left-[62.90px] top-0 absolute text-neutral-500 text-[8px] font-normal font-['Radley']">5000 points</div>
                <div className="w-[86.61px] h-[9.28px] left-0 top-0 absolute text-neutral-500 text-[8px] font-normal font-['Radley']">1000 points</div>
            </div>
        </div>
        <div className="w-[287px] h-[33px] left-[40px] top-[583px] absolute text-white text-[15px] font-normal font-['Poppins']">Opções</div>
        <div className="w-[313px] h-[138.40px] left-[47px] top-[337px] absolute">
            <div className="w-[313px] h-[138.40px] left-0 top-0 absolute bg-white" />
            <img className="w-[313px] h-[138.40px] left-0 top-0 absolute mix-blend-darken" src="https://via.placeholder.com/313x138" />
        </div>
        <div className="w-[375px] h-11 left-[12px] top-0 absolute backdrop-blur-[20px]">
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
        <img className="w-[161px] h-[30px] left-[119px] top-[42px] absolute" src="https://via.placeholder.com/161x30" />
        <div className="w-[37px] h-[37px] left-[24px] top-[35px] absolute origin-top-left rotate-90" />
        <div className="left-[47px] top-[156px] absolute text-center text-white text-4xl font-medium font-['Caros'] leading-tight">Entrada Principal</div>
        <div className="left-[37px] top-[723px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="w-[322px] h-[42px] relative">
                <div className="w-[322px] h-[42px] left-0 top-0 absolute bg-neutral-500 rounded-[10px]" />
                <div className="left-[147px] top-[9px] absolute text-white text-[15px] font-medium font-['Poppins']">Sair</div>
            </div>
        </div>
    </div>
    );
}