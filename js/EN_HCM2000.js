//classe 1
//passo 2
function fhv_f(PT,ET,PR,ER) {
    return 1/(1+PT*(ET-1)+PR*(ER-1))
  }
  //passo3
  function vp_f(V,PHF,fg,fhv) {
    return V/(PHF*fg*fhv)
  }
 // Expressão de cálculo do fls
function f_ls(B,V){
    if (V>=2.7 && V<3.0 && B>=0 && B < 0.6){
        return 10.3
    }
    else if (V>=2.7 && V<3.0 && B>=0.6 && B < 1.2){
        return 7.7
    }
    else if (V>=2.7 && V<3.0 && B>=1.2 && B < 1.8){
        return 5.6
    }
    else if (V>=2.7 && V<3.0 && B>=1.8){
        return 3.5
    }
    if (V>=3.0 && V<3.3 && B>=0 && B < 0.6){
        return 8.5
    }
    else if (V>=3.0 && V<3.3 && B>=0.6 && B < 1.2) {
        return 5.9
    }
    else if (V>=3.0 && V<3.3 && B>=1.2 && B < 1.8) {
        return 3.8
    }
    else if (V>=3.0 && V<3.3 && B>=1.8) {
        return 1.7 
    }
    if (V>=3.3 && V<3.6 && B>=0 && B < 0.6){
        return 7.5
    }
    else if (V>=3.3 && V<3.6 && B>=0.6 && B < 1.2) {
        return 4.9
    }
    else if (V>=3.3 && V<3.6 && B>=1.2 && B < 1.8) {
        return 2.8
    }
    else if (V>=3.3 && V<3.6 && B>=1.8) {
        return 0.7
    }
    if (V>=3.6 && B>=0 && B < 0.6) {
        return 6.8
    }
    else if (V>=3.6 && B>=0.6 && B < 1.2) {
        return 4.2
    }
    else if (V>=3.6 && B>=1.2 && B < 1.8) {
        return 2.1
    }
    else if (V>=3.6 && B>=1.8) {
        return 0
    }
}
function fa_f(Acessos){
    let fa = 0;
    fa = (4/6)*Acessos
    if (Acessos=>24){
        fa=16.0
    }
    return fa
}
//passo 6
function FFS_f(BFFS,fls,fA) {
  return BFFS-fls-fA
}
function interpolarBilinear(x, y, x1, y1, x2, y2, q11, q12, q21, q22) {
    const denom = (x2 - x1) * (y2 - y1);
    const numer1 = q11 * (x2 - x) * (y2 - y);
    const numer2 = q21 * (x - x1) * (y2 - y);
    const numer3 = q12 * (x2 - x) * (y - y1);
    const numer4 = q22 * (x - x1) * (y - y1);
  
    const valorInterpolado = (1 / denom) * (numer1 + numer2 + numer3 + numer4);
    return valorInterpolado;
}
//fnp
function fnp_f(NPS,vp) {
    let fnp = 0;
    if(vp==0 || NPS==0){
        fnp = 0;
    }else if
}
//passo7 fim da primeira parte
function Ats_f(FFS,vp,fnp) {
  return FFS-vp-fnp
}

//classe 2
//passo 13
function BPTSF_F(vp) {
    return 100*(1-Math.E**(-0.000879*vp))
}
//passo 14
function PTSF(BPTSF,fdnp) {
  return BPTSF+fdnp
}
//passo15
function class_F(classe,ATS,PTSF,vd,vo) {
    let LOS = ""
    var NS = []
    if (vd>1700 || vo>1700) {
        LOS = "F"
    }else {
        if(classe==1){
            if(ATS<=60){
                NS[0] = 5;
            }else if(ATS>60 && ATS<=70){
                NS[0] = 4;
            }else if(ATS>70 && ATS<=80){
                NS[0] = 3;
            }else if(ATS>80 && ATS<=90){
                NS[0] = 2;
            }else if(ATS>90){
                NS[0] = 1;
            }
            if (PTSF<=35) {
                NS[1] = 1;
            }else if(PTSF>35 && PTSF<=50){
                NS[1] = 2;
            }else if(PTSF>50 && PTSF<=65){
                NS[1] = 3;
            }else if(PTSF>65 && PTSF<=80){
                NS[1] = 4;
            }else if(PTSF>80){
                NS[1] = 5;
            }
            var max = Math.max(...NS);
            if (max==1){
                LOS = "A";
            }else if(max==2){
                LOS = "B";
            }else if(max==3){
                LOS = "C";
            }else if(max==4){
                LOS = "D";
            }else if(max==5){
                LOS = "E";
            }
        }else if(classe==2){
            if(PTSF<=40) {
                LOS = "A";
            }else if(PTSF>40 && PTSF<=55){
                LOS = "B";
            }else if (PTSF>55 && PTSF<=70){
                LOS = "C";
            }else if (PTSF>70 && PTSF<=85){
                LOS = "D";
            }else if (PTSF>85){
                LOS = "E"
            }
        }
    }
    return LOS
}