// Função de vp
function v_p_2022(V,PHF,N,fHV){
    return V/(PHF*N*fHV)
}
// Função de fHV
function f_hv_2022(PT,ET){
    return 1/(1+(PT/100)*(ET-1))
}
// Função de FFS
function FFS_f(BFFS,flw,frlc,TRD){
    let FFS = 0
    FFS = BFFS - flw - frlc - (3.22*TRD**0,84)
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
function f_lc_2022(N,Berma){
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

//Função de FN
function f_n(N){
    if (N<=5){
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
function S_f_2022(FFS,vp){
    if (FFS<=120 && FFS>=90){
        if(vp>(3100-15*FFS) && vp<=(1800-5*FFS)){
            return FFS - ((1/28)*(23*FFS-1800)*((vp+15*FFS-3100)/(20*FFS-1300)))

        }else if (vp<=(3100-15*FFS)){
            return FFS
        
        }
    }
}

//densidade (pc/km/via)
function D_f(vp,S){
    return vp/S
}


//Nivel de serviço (A,F)
function LOS (D){
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