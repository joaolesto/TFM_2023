// Função de vp
function v_p(V,PHF,N,fHV,fp){
    return V/(PHF*N*fHV*fp)
}

// Função de fHV
function f_hv(PT,ET,PR,ER){
    return 1/(1+(PT/100)*(ET-1)+(PR/100)*(ER-1))
}
// Função de FFS
function FFS_f(BFFS,flw,flc,fn,fid){
    let FFS = 0
    FFS = BFFS - flw - flc - fn - fid
    return FFS
}

// Função de Flw
function f_lw(lar){
    if (lar>=3.0 && lar<=3.1) {
        return 10.6-((3-lar)*(10.6-8.1)/(3-3.1))

    }else if (lar>3.1 && lar<=3.2) {
        return 8.1-((3.1-lar)*(8.1-5.6)/(3.1-3.2))

    }else if (lar>3.2 && lar<=3.3) {
        return 5.6-((3.2-lar)*(5.6-3.1)/(3.2-3.3))

    }else if (lar>3.3 && lar<=3.4) {
        return 3.1-((3.3-lar)*(3.1-2.1)/(3.3-3.4))

    }else if (lar>3.4 && lar<=3.5) {
        return 2.1-((3.4-lar)*(2.1-1)/(3.4-3.5))

    }else if (lar>3.5 && lar<=3.6) {
        return 1-((3.5-lar)*(1-0)/(3.5-3.6))

    }else if (lar>3.6) {
        return 0

    }
}
//interpolação
function inter(x1,x2,xc,y1,y2){
    return y1-((x1-xc)*(y1-y2)/(x1-x2))
}
// Função de Flc
function f_lc(N,Berma){
    if (Berma>1.8){
        return 0
    }
    if (N===2){
        if (Berma===0){
            return 5.8

        }else if (Berma>0 && Berma<=0.3){
            return inter(0,0.3,Berma,5.8,4.8)

        }else if (Berma>0.3 && Berma<=0.6){
            return inter(0.3,0.6,Berma,4.8,3.9)

        }else if (Berma>0.6 && Berma<=0.9) {
            return inter(0.6,0.9,Berma,3.9,2.9)

        }else if (Berma>0.9 && Berma<=1.2) {
            return inter(0.9,1.2,Berma,2.9,1.9)
        
        }else if (Berma>1.2 && Berma<=1.5){
            return inter(1.2,1.5,Berma,1.9,1.0)

        }else if (Berma>1.5 && Berma<=1.8) {
            return inter(1.5,1.8,Berma,1.0,0)
        }
    }

    if (N===3){
        if (Berma===0){
            return 3.9

        }else if (Berma>0 && Berma<=0.3){
            return inter(0,0.3,Berma,3.9,3.2)

        }else if (Berma>0.3 && Berma<=0.6){
            return inter(0.3,0.6,Berma,3.2,2.6)

        }else if (Berma>0.6 && Berma<=0.9) {
            return inter(0.6,0.9,Berma,2.6,1.9)

        }else if (Berma>0.9 && Berma<=1.2) {
            return inter(0.9,1.2,Berma,1.9,1.3)
        
        }else if (Berma>1.2 && Berma<=1.5){
            return inter(1.2,1.5,Berma,1.3,0.7)

        }else if (Berma>1.5 && Berma<=1.8) {
            return inter(1.5,1.8,Berma,0.7,0)
        }
    }

    if (N===4){
        if (Berma===0){
            return 1.9

        }else if (Berma>0 && Berma<=0.3){
            return inter(0,0.3,Berma,1.9,1.6)

        }else if (Berma>0.3 && Berma<=0.6){
            return inter(0.3,0.6,Berma,1.6,1.3)

        }else if (Berma>0.6 && Berma<=0.9) {
            return inter(0.6,0.9,Berma,1.3,1.0)

        }else if (Berma>0.9 && Berma<=1.2) {
            return inter(0.9,1.2,Berma,1.0,0.7)
        
        }else if (Berma>1.2 && Berma<=1.5){
            return inter(1.2,1.5,Berma,0.7,0.3)

        }else if (Berma>1.5 && Berma<=1.8) {
            return inter(1.5,1.8,Berma,0.3,0)
        }
    }

    if (N>=5){
        if (Berma===0){
            return 1.3

        }else if (Berma>0 && Berma<=0.3){
            return inter(0,0.3,Berma,1.3,1.1)

        }else if (Berma>0.3 && Berma<=0.6){
            return inter(0.3,0.6,Berma,1.1,0.8)

        }else if (Berma>0.6 && Berma<=0.9) {
            return inter(0.6,0.9,Berma,0.8,0.6)

        }else if (Berma>0.9 && Berma<=1.2) {
            return inter(0.9,1.2,Berma,0.6,0.4)
        
        }else if (Berma>1.2 && Berma<=1.5){
            return inter(1.2,1.5,Berma,0.4,0.2)

        }else if (Berma>1.5 && Berma<=1.8) {
            return inter(1.5,1.8,Berma,0.2,0)
        }
    }
}

//Função de FN
function f_n(N){
    if (N>=5){
        return 0
    
    }else if (N===4) {
        return 2.4

    }else if (N===3) {
        return 4.8
    
    }else if (N===2) {
        return 7.3
    }
}

//Função de FID

function f_id(Pa){
    if (Pa>=1.2) {
        return 12.1

    }else if (Pa<1.2 && Pa>=1.1){
        return inter(1.2,1.1,Pa,12.1,10.2)

    }else if (Pa<1.1 && Pa>=1.0){
        return inter(1.1,1.0,Pa,10.2,9.2)

    }else if (Pa<1.0 && Pa>=0.9) {
        return inter(1.0,0.9,Pa,9.2,8.1)

    }else if (Pa<0.9 && Pa>=0.8) {
        return inter(0.9,0.8,Pa,8.1,6.0)

    }else if (Pa<0.8 && Pa>=0.7) {
        return inter(0.8,0.7,Pa,6.0,5.0)

    }else if (Pa<0.7 && Pa>=0.6) {
        return inter(0.7,0.6,Pa,5.0,3.9)

    }else if (Pa<0.6 && Pa>=0.5) {
        return inter(0.6,0.5,Pa,3.9,2.1)

    }else if (Pa<0.5 && Pa>=0.4) {
        return inter(0.5,0.4,Pa,2.1,1.1)

    }else if (Pa<0.4 && Pa>=0.3) {
        return inter(0.4,0.3,Pa,1.1,0.0)
    
    }else if (Pa<0.3) {
        return 0.0
    }
}

//velocidade média S (Km/h)
function S_f(FFS,vp){
    if(FFS<=120 && FFS>=90 && vp>(3100-15*FFS) && vp<=(1800+5*FFS)){
        return (FFS - ((1/28)*(23*FFS-1800)*(((vp+15*FFS-3100)/(20*FFS-1300))**2.6)))

    }else
        return FFS
    }

//densidade (pc/km/via)
function D_f(vp,S){
    return vp/S
}


//Nivel de serviço (A,F)
function LOS(D){
    if (D>=0 && D<7){
        return "A"

    }else if (D>=7 && D<11){
        return "B"

    }else if (D>=11 && D<16){
        return "C"

    }else if (D>=16 && D<22){
        return "D"

    }else if (D>=22 && D<28){
        return "E"

    }else if (D>=28) {
        return "F"
    }
}