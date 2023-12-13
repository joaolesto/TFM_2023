//classe 1
//passo 2
function fhv_f(PT,ET,PR,ER) {
    return 1/(1+(PT/100)*(ET-1)+(PR/100)*(ER-1))
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
function fa_f(A){
    let fa = 0;
    fa = (4/6)*A
    if (A>24){
        fa=16.0
    }
    return fa
}
//passo 6
function FFS_f(BFFS,fls,fA) {
  return BFFS-fls-fA
}


//fnp_ats

  

//passo7 fim da primeira parte
function Ats_f(FFS,vd_s,vo_s,fnp_s) {
  return FFS-0.0125*(vd_s+vo_s)-fnp_s
}

//classe 2
//passo 13
function BPTSF_f(vd_ts,a,b) {
    return 100*(1-Math.exp(a*vd_ts**(b)))
}
//passo 14.1
function exps_ts(vo){
    let a = 0;
    let b = 0;
    if (vo<=200){
        a=-0.013;
        b=0.668;
    }else if(vo>200 && vo<=400){
        a=-0.057;
        b=0.479;
    }else if (vo>400 && vo<=600){
        a=-0.100;
        b= 0.413;
    }else if (vo>600 && vo<=800){
        a=-0.173;
        b= 0.349;
    }else if (vo>800 && vo<=1000){
        a=-0.320;
        b=0.276;
    }else if (vo>1000 && vo<=1200){
        a=-0.430;
        b=0.242;
    }else if (vo>1200 && vo<=1400){
        a=-0.522;
        b=0.225;
    }else if (vo=>1600){
        a=-0.665;
        b=0.199;
    }
    return [a, b]
}
//fnp_ts
function fnp_f_ts(FFS,vo,U){ //fnp tempo de seguimentp
    let fnp_ts = 0;
    if (U===0){ //sem ultrapassagem
        if (FFS>=110){
            if (vo<=100){
                fnp_ts=10.1;
            }else if (vo>100 && vo<=200){
                fnp_ts=12.4;
            }else if (vo>200 && vo<=400){
                fnp_ts=9.0;
            }else if (vo>400 && vo<=600){
                fnp_ts=5.3;
            }else if (vo>600 && vo<=800){
                fnp_ts=3.0;
            }else if (vo>800 && vo<=1000){
                fnp_ts=1.8;
            }else if (vo>1000 && vo<=1200){
                fnp_ts=1.3;
            }else if (vo>1200 && vo<=1400){
                fnp_ts=0.9;
            }else if (vo>1400){
                fnp_ts=0.7;
            }
        }else if (FFS<110 && FFS>=100){
            if (vo<=100){
                fnp_ts=8.4;
            }else if (vo>100 && vo<=200){
                fnp_ts=11.5;
            }else if (vo>200 && vo<=400){
                fnp_ts=8.6;
            }else if (vo>400 && vo<=600){
                fnp_ts=5.1;
            }else if (vo>600 && vo<=800){
                fnp_ts=2.8;
            }else if (vo>800 && vo<=1000){
                fnp_ts=1.6;
            }else if (vo>1000 && vo<=1200){
                fnp_ts=1.2;
            }else if (vo>1200 && vo<=1400){
                fnp_ts=0.8;
            }else if (vo>1400){
                fnp_ts=0.6;
            }
        }else if (FFS<100 && FFS>=90){
            if (vo<=100){
                fnp_ts=6.7;
            }else if (vo>100 && vo<=200){
                fnp_ts=10.5;
            }else if (vo>200 && vo<=400){
                fnp_ts=8.3;
            }else if (vo>400 && vo<=600){
                fnp_ts=4.9;
            }else if (vo>600 && vo<=800){
                fnp_ts=2.7;
            }else if (vo>800 && vo<=1000){
                fnp_ts=1.5;
            }else if (vo>1000 && vo<=1200){
                fnp_ts=1.0;
            }else if (vo>1200 && vo<=1400){
                fnp_ts=0.7;
            }else if (vo>1400){
                fnp_ts=0.6;
            }
        }else if (FFS<90 && FFS>=80){
            if (vo<=100){
                fnp_ts=5.0;
            }else if (vo>100 && vo<=200){
                fnp_ts=9.6;
            }else if (vo>200 && vo<=400){
                fnp_ts=7.9;
            }else if (vo>400 && vo<=600){
                fnp_ts=4.7;
            }else if (vo>600 && vo<=800){
                fnp_ts=2.5;
            }else if (vo>800 && vo<=1000){
                fnp_ts=1.3;
            }else if (vo>1000 && vo<=1200){
                fnp_ts=0.9;
            }else if (vo>1200 && vo<=1400){
                fnp_ts=0.6;
            }else if (vo>1400){
                fnp_ts=0.5;
            }
        }else if (FFS<80 && FFS>=70){
            if (vo<=100){
                fnp_ts=3.7;
            }else if (vo>100 && vo<=200){
                fnp_ts=8.7;
            }else if (vo>200 && vo<=400){
                fnp_ts=7.5;
            }else if (vo>400 && vo<=600){
                fnp_ts=4.5;
            }else if (vo>600 && vo<=800){
                fnp_ts=2.3;
            }else if (vo>800 && vo<=1000){
                fnp_ts=1.2;
            }else if (vo>1000 && vo<=1200){
                fnp_ts=0.8;
            }else if (vo>1200 && vo<=1400){
                fnp_ts=0.5;
            }else if (vo>1400){
                fnp_ts=0.4;
            }
        }
    }else{ //com ultrapassagem
         if (FFS>=110){
            if (vo<=100){
                fnp_ts=21.8;
            }else if (vo>100 && vo<=200){
                fnp_ts=24.8;
            }else if (vo>200 && vo<=400){
                fnp_ts=15.4;
            }else if (vo>400 && vo<=600){
                fnp_ts=10.4;
            }else if (vo>600 && vo<=800){
                fnp_ts=6.7;
            }else if (vo>800 && vo<=1000){
                fnp_ts=4.4;
            }else if (vo>1000 && vo<=1200){
                fnp_ts=3.1;
            }else if (vo>1200 && vo<=1400){
                fnp_ts=2.1;
            }else if (vo>1400){
                fnp_ts=1.4;
            }
        }else if (FFS<110 && FFS>=100){
            if (vo<=100){
                fnp_ts=26.6;
            }else if (vo>100 && vo<=200){
                fnp_ts=29.7;
            }else if (vo>200 && vo<=400){
                fnp_ts=18.1;
            }else if (vo>400 && vo<=600){
                fnp_ts=12.1;
            }else if (vo>600 && vo<=800){
                fnp_ts=7.7;
            }else if (vo>800 && vo<=1000){
                fnp_ts=4.9;
            }else if (vo>1000 && vo<=1200){
                fnp_ts=3.4;
            }else if (vo>1200 && vo<=1400){
                fnp_ts=2.3;
            }else if (vo>1400){
                fnp_ts=1.5;
            }
        }else if (FFS<100 && FFS>=90){
            if (vo<=100){
                fnp_ts=31.3;
            }else if (vo>100 && vo<=200){
                fnp_ts=34.7;
            }else if (vo>200 && vo<=400){
                fnp_ts=20.7;
            }else if (vo>400 && vo<=600){
                fnp_ts=13.9;
            }else if (vo>600 && vo<=800){
                fnp_ts=8.8;
            }else if (vo>800 && vo<=1000){
                fnp_ts=5.4;
            }else if (vo>1000 && vo<=1200){
                fnp_ts=3.8;
            }else if (vo>1200 && vo<=1400){
                fnp_ts=2.4;
            }else if (vo>1400){
                fnp_ts=1.5;
            }
        }else if (FFS<90 && FFS>=80){
            if (vo<=100){
                fnp_ts=36.1;
            }else if (vo>100 && vo<=200){
                fnp_ts=39.6;
            }else if (vo>200 && vo<=400){
                fnp_ts=23.4;
            }else if (vo>400 && vo<=600){
                fnp_ts=15.6;
            }else if (vo>600 && vo<=800){
                fnp_ts=9.8;
            }else if (vo>800 && vo<=1000){
                fnp_ts=5.9;
            }else if (vo>1000 && vo<=1200){
                fnp_ts=4.1;
            }else if (vo>1200 && vo<=1400){
                fnp_ts=2.6;
            }else if (vo>1400){
                fnp_ts=1.6;
            }
        }else if (FFS<80 && FFS>=70){
            if (vo<=100){
                fnp_ts=41.6;
            }else if (vo>100 && vo<=200){
                fnp_ts=45.2;
            }else if (vo>200 && vo<=400){
                fnp_ts=26.4;
            }else if (vo>400 && vo<=600){
                fnp_ts=17.6;
            }else if (vo>600 && vo<=800){
                fnp_ts=11.0;
            }else if (vo>800 && vo<=1000){
                fnp_ts=6.4;
            }else if (vo>1000 && vo<=1200){
                fnp_ts=4.5;
            }else if (vo>1200 && vo<=1400){
                fnp_ts=2.8;
            }else if (vo>1400){
                fnp_ts=1.7;
            }
        }
    }
    return fnp_ts
}
//fnp velocidade média de viagem
function fnp_f_ats(FFS,vo,U){ //fnp velocidade média de viagem
    let fnp_ats = 0;
    if (U===0){
        if (FFS>=110){
            if (vo<=100){
                fnp_ats=1.7;
            }else if (vo>100 && vo<=200){
                fnp_ats=3.5;
            }else if (vo>200 && vo<=400){
                fnp_ats=2.6;
            }else if (vo>400 && vo<=600){
                fnp_ats=2.2;
            }else if (vo>600 && vo<=800){
                fnp_ats=1.1;
            }else if (vo>800 && vo<=1000){
                fnp_ats=1.0;
            }else if (vo>1000 && vo<=1200){
                fnp_ats=0.9;
            }else if (vo>1200 && vo<=1400){
                fnp_ats=0.9;
            }else if (vo>1400){
                fnp_ats=0.9;
            }
        }else if (FFS<110 && FFS>=100){
            if (vo<=100){
                fnp_ats=1.2;
            }else if (vo>100 && vo<=200){
                fnp_ats=3.0;
            }else if (vo>200 && vo<=400){
                fnp_ats=2.3;
            }else if (vo>400 && vo<=600){
                fnp_ats=1.8;
            }else if (vo>600 && vo<=800){
                fnp_ats=0.9;
            }else if (vo>800 && vo<=1000){
                fnp_ats=0.9;
            }else if (vo>1000 && vo<=1200){
                fnp_ats=0.8;
            }else if (vo>1200 && vo<=1400){
                fnp_ats=0.8;
            }else if (vo>1400){
                fnp_ats=0.8;
            }
        }else if (FFS<100 && FFS>=90){
            if (vo<=100){
                fnp_ats=0.8;
            }else if (vo>100 && vo<=200){
                fnp_ats=2.4;
            }else if (vo>200 && vo<=400){
                fnp_ats=2.1;
            }else if (vo>400 && vo<=600){
                fnp_ats=1.4;
            }else if (vo>600 && vo<=800){
                fnp_ats=0.8;
            }else if (vo>800 && vo<=1000){
                fnp_ats=0.8;
            }else if (vo>1000 && vo<=1200){
                fnp_ats=0.8;
            }else if (vo>1200 && vo<=1400){
                fnp_ats=0.8;
            }else if (vo>1400){
                fnp_ats=0.8;
            }
        }else if (FFS<90 && FFS>=80){
            if (vo<=100){
                fnp_ats=0.3;
            }else if (vo>100 && vo<=200){
                fnp_ats=1.9;
            }else if (vo>200 && vo<=400){
                fnp_ats=1.8;
            }else if (vo>400 && vo<=600){
                fnp_ats=1.0;
            }else if (vo>600 && vo<=800){
                fnp_ats=0.6;
            }else if (vo>800 && vo<=1000){
                fnp_ats=0.6;
            }else if (vo>1000 && vo<=1200){
                fnp_ats=0.6;
            }else if (vo>1200 && vo<=1400){
                fnp_ats=0.6;
            }else if (vo>1400){
                fnp_ats=0.6;
            }
        }else if (FFS<80 && FFS>=70){
            if (vo<=100){
                fnp_ats=0.1;
            }else if (vo>100 && vo<=200){
                fnp_ats=1.5;
            }else if (vo>200 && vo<=400){
                fnp_ats=1.5;
            }else if (vo>400 && vo<=600){
                fnp_ats=0.7;
            }else if (vo>600 && vo<=800){
                fnp_ats=0.5;
            }else if (vo>800 && vo<=1000){
                fnp_ats=0.5;
            }else if (vo>1000 && vo<=1200){
                fnp_ats=0.5;
            }else if (vo>1200 && vo<=1400){
                fnp_ats=0.5;
            }else if (vo>1400){
                fnp_ats=0.5;
            }
        }
    }else{
         if (FFS=>110){
            if (vo<=100){
                fnp_ats=5.0;
            }else if (vo>100 && vo<=200){
                fnp_ats=6.8;
            }else if (vo>200 && vo<=400){
                fnp_ats=4.7;
            }else if (vo>400 && vo<=600){
                fnp_ats=3.3;
            }else if (vo>600 && vo<=800){
                fnp_ats=2.4;
            }else if (vo>800 && vo<=1000){
                fnp_ats=1.9;
            }else if (vo>1000 && vo<=1200){
                fnp_ats=1.7;
            }else if (vo>1200 && vo<=1400){
                fnp_ats=1.5;
            }else if (vo>1400){
                fnp_ats=1.3;
            }
        }else if (FFS<110 && FFS>=100){
            if (vo<=100){
                fnp_ats=4.7;
            }else if (vo>100 && vo<=200){
                fnp_ats=6.7;
            }else if (vo>200 && vo<=400){
                fnp_ats=4.6;
            }else if (vo>400 && vo<=600){
                fnp_ats=3.2;
            }else if (vo>600 && vo<=800){
                fnp_ats=2.3;
            }else if (vo>800 && vo<=1000){
                fnp_ats=1.9;
            }else if (vo>1000 && vo<=1200){
                fnp_ats=1.7;
            }else if (vo>1200 && vo<=1400){
                fnp_ats=1.4;
            }else if (vo>1400){
                fnp_ats=1.2;
            }
        }else if (FFS<100 && FFS>=90){
            if (vo<=100){
                fnp_ats=4.4;
            }else if (vo>100 && vo<=200){
                fnp_ats=6.6;
            }else if (vo>200 && vo<=400){
                fnp_ats=4.5;
            }else if (vo>400 && vo<=600){
                fnp_ats=3.1;
            }else if (vo>600 && vo<=800){
                fnp_ats=2.2;
            }else if (vo>800 && vo<=1000){
                fnp_ats=1.8;
            }else if (vo>1000 && vo<=1200){
                fnp_ats=1.6;
            }else if (vo>1200 && vo<=1400){
                fnp_ats=1.4;
            }else if (vo>1400){
                fnp_ats=1.1;
            }
        }else if (FFS<90 && FFS>=80){
            if (vo<=100){
                fnp_ats=4.1;
            }else if (vo>100 && vo<=200){
                fnp_ats=6.5;
            }else if (vo>200 && vo<=400){
                fnp_ats=4.4;
            }else if (vo>400 && vo<=600){
                fnp_ats=3.0;
            }else if (vo>600 && vo<=800){
                fnp_ats=2.1;
            }else if (vo>800 && vo<=1000){
                fnp_ats=1.8;
            }else if (vo>1000 && vo<=1200){
                fnp_ats=1.6;
            }else if (vo>1200 && vo<=1400){
                fnp_ats=1.3;
            }else if (vo>1400){
                fnp_ats=1.0;
            }
        }else if (FFS<80 && FFS>=70){
            if (vo<=100){
                fnp_ats=3.8;
            }else if (vo>100 && vo<=200){
                fnp_ats=6.4;
            }else if (vo>200 && vo<=400){
                fnp_ats=4.3;
            }else if (vo>400 && vo<=600){
                fnp_ats=2.9;
            }else if (vo>600 && vo<=800){
                fnp_ats=2.0;
            }else if (vo>800 && vo<=1000){
                fnp_ats=1.8;
            }else if (vo>1000 && vo<=1200){
                fnp_ats=1.6;
            }else if (vo>1200 && vo<=1400){
                fnp_ats=1.2;
            }else if (vo>1400){
                fnp_ats=0.9;
            }
        }
    }
    return fnp_ats
}


//passo 14 (corrigir)
function PTSF_f(BPTSF,fnp_ts) {
  return BPTSF+fnp_ts
}
//passo15
function LOS_f(classe,ATS,PTSF) {
    let LOS = ""
    var NS = [];
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
    return LOS
}
   