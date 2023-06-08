// Função de vp
function v_p_2022(V,PHF,N,fHV){
    return V/(PHF*N*fHV)
}
// Função de fHV
function f_hv_2022(PT,ET){
    return 1/(1+(PT/100)*(ET-1))
}
// Função de FFS
function FFS_f_2022(BFFS,flw,frlc,TRD){
    let FFS = 0
    let BFFS_c = 0
    BFFS_c=BFFS*(1/1.61)
    FFS = BFFS_c - flw - frlc - (3.22*TRD**0,84)
    return FFS
}

// Função de Flw
function f_lw_2022(lar){
    let lar_c = 0
    lar_c = lar * (1/0.305)

    if (lar_c>=12.0) {
        return 0

    }else if (lar_c>=11.0 && lar_c<12.0){
        return 1.9
    
    }else if (lar_c>=10.0 && lar_c<11.0){
        return 6.6

    }
}
//interpolação
function inter(x1,x2,xc,y1,y2){
    return y1-((x1-xc)*(y1-y2)/(x1-x2))
}
// Função de Flc
function f_rlc(N,Berma){
    let Berma_c = 0
    Berma_c = Berma * (1/0.305)

    if (Berma_c>=6){
        return 0
    }
    if (N===2){
        return -0.6*Berma_c+3.6
    }
    if (N===3){
        return -0.4*Berma_c+2.4
    }
    if (N===4){
        return -0.2*Berma_c+1.2
    }
    if (N>=5){
       return -0.1*Berma_c+0.6
    }
}
//FFS_adj
function FFSadj_f(FFS,SAF){
    return FFS*SAF
}

//c 
function c_f(FFS){
    let FFS_c = 0
    FFS_c=FFS*(1/1.61)
    return 2200+10*(FFS_c-50)
}

//c ajustado
function cadj_f(c,CAF){
    return c*CAF
}

//Bp
function BP_f(FFS,CAF){
    return (CAF**2)*(1000+40*(75-FFS)) 
}

//BPadj
function BPadj_f(FFSadj,CAF){
    return (CAF**2)*(1000+40*(75-FFSadj))
}

//velocidade média S (Km/h)
function S_f_2022(FFSadj,vp,BPadj,c,cadj){
    if(vp<=BPadj){
        return FFSadj

    }else if (vp>BPadj && vp<=c){
        return FFSadj-((FFSadj-((cadj/45)*(vp-BPadj)**2)/((cadj-BPadj)**2)))
    }
}

//densidade (pc/km/via)
function D_f(vp,S){
    return vp/S
}


//Nivel de serviço (A,F)
function LOS_2022 (D){
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