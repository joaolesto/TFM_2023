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


//fnp
function interpolarBilinear(x, y, x1, y1, x2, y2, q11, q12, q21, q22) {
    const denom = (x2 - x1) * (y2 - y1);
    const numer1 = q11 * (x2 - x) * (y2 - y);
    const numer2 = q21 * (x - x1) * (y2 - y);
    const numer3 = q12 * (x2 - x) * (y - y1);
    const numer4 = q22 * (x - x1) * (y - y1);
  
    const valorInterpolado = (1 / denom) * (numer1 + numer2 + numer3 + numer4);
    return valorInterpolado;
  }
  
  function interpolacao_simples(x, x1, y1, x2, y2) {
    y = y1 + ((x - x1) * (y2 - y1)) / (x2 - x1);
    return y;
  }
  
  function fnp_f(pz, df) {
    var a = [0, 20, 40, 60, 80, 100];
    var b = [0, 200, 400, 600, 800, 1000, 1200, 1400, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200];
  
    var matriz = [[0, 0, 0, 0, 0, 0], [0,1,2.3,3.8,4.2,5.6],[0,2.7,4.3,5.7,6.3,7.3],[0,2.5,3.8,4.9,5.5,6.2],[0,2.2,3.1,3.9,4.3,4.9],[0,1.8,2.5,3.2,3.6,4.2],[0,1.3,2.0,2.6,3.0,3.4],[0,0.9,1.4,1.9,2.3,2.7],[0,0.9,1.3,1.7,2.1,2.4],[0,0.8,1.1,1.6,1.8,2.1],[0,0.8,1.0,1.4,1.6,1.8],[0,0.8,1.0,1.4,1.5,1.7],[0,0.8,1,1.3,1.5,1.7],[0.0,0.8,1,1.3,1.4,1.6],[0,0.8,1.0,1.2,1.3,1.4],[0,0.8,0.9,1.1,1.1,1.3],[0,0.8,0.9,1,1,1.1]]
  
    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 0;
    let Q11 = 0;
    let Q12 = 0;
    let Q21 = 0;
    let Q22 = 0;
    let l = 0;
    let m = 0;
    let n = 0;
    let o = 0;
  
    if (a.includes(pz) && b.includes(df)) {
      console.log(a.indexOf(pz));
      console.log(b.indexOf(df));
      return matriz[b.indexOf(df)][a.indexOf(pz)];
    } else if (a.includes(pz) && !b.includes(df)) {
      for (let i = 0; i < b.length; i++) {
        if (b[i] < df && b[i + 1] > df) {
          y1 = b[i];
          n = i;
          y2 = b[i + 1];
          o = i + 1;
          return interpolacao_simples(df, y1, matriz[n][a.indexOf(pz)], y2, matriz[o][a.indexOf(pz)]);
        }
      }
    } else if (!a.includes(pz) && b.includes(df)) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] < pz && a[i + 1] > pz) {
          x1 = a[i];
          l = i;
          x2 = a[i + 1];
          m = i + 1;
          return interpolacao_simples(pz, x1, matriz[b.indexOf(df)][l], x2, matriz[b.indexOf(df)][m]);
        }
      }
    } else {
      for (let i = 0; i < a.length; i++) {
        if (a[i] < pz && a[i + 1] > pz) {
          x1 = a[i];
          l = i;
          x2 = a[i + 1];
          m = i + 1;
        }
      }
  
      for (let i = 0; i < b.length; i++) {
        if (b[i] < df && b[i + 1] > df) {
          y1 = b[i];
          n = i;
          y2 = b[i + 1];
          o = i + 1;
        }
      }
  
      Q11 = matriz[n][l];
      Q12 = matriz[o][l];
      Q21 = matriz[n][m];
      Q22 = matriz[o][m];
  
      const valorInterpolado = interpolarBilinear(pz, df, x1, y1, x2, y2, Q11, Q12, Q21, Q22);
      return valorInterpolado;
    }
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