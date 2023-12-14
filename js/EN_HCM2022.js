//passo 1
function NS2022_f(limite,FD,vd,vo){
    let Los = "";
    if (vd>1700 || vo>1700){
        Los = "F";
    }else if(limite=>80.5){
        if(FD<=2.0){
            Los = "A";
            return Los
        }else if(FD>2.0 && FD<=4.0){
            Los = "B";
            return Los
        }else if(FD>4.0 && FD<=8.0){
            Los = "C";
            return Los
        }else if(FD>8.0 && FD<=12.0){
            Los = "D";
            return Los
        }else if(FD>12.0){
            Los = "E";
            return Los
        }
    }else if(limite<80.5){
        if(FD<=2.5){
            Los = "A";
            return Los
        }else if(FD>2.5 && FD<=5.0){
            Los = "B";
            return Los
        }else if(FD>5.0 && FD<=10.0){
            Los = "C";
            return Los
        }else if(FD>10.0 && FD<=15.0){
            Los = "D";
            return Los
        }else if(FD>15.0){
            Los = "E";
            return Los
        }
    }
}
//passo 2 
function classe_vertical_f(i,L){
    let classe = 0;
    if (i>=0) { //para as subidas
        if (i<=1 && i<=2) {
            classe = 1;
        }else if ((i>2 && i<=3) && (L<=0.483)){
            classe = 1;
        }else if ((i>2 && i<=3) && (L>0.483)){
            classe = 2;
        }else if ((i>3 && i<=4) && (L<=0.322)){
            classe = 1;
        }else if ((i>3 && i<=4) && (L>0.322 && L<=0.805)){
            classe = 2;
        }else if ((i>3 && i<=4) && (L>0.805 && L<=1.771)){
            classe = 3;
        }else if ((i>3 && i<=4) && (L>1.771)){
            classe = 4;
        }else if ((i>4 && i<=5) && ( L<=0.161)){
            classe = 1;
        }else if ((i>4 && i<=5) && ( L>0.161 && L<=0.483)){
            classe = 2;
        }else if ((i>4 && i<=5) && ( L>0.483 && L<=0.966)){
            classe = 3;
        }else if ((i>4 && i<=5) && ( L>0.966)){
            classe = 4;
        }else if ((i>5 && i<=6) && (L<=0.161)){
            classe = 1;
        }else if ((i>5 && i<=6) && ( L>0.161 && L<=0.322)){
            classe = 2;
        }else if ((i>5 && i<=6) && ( L>0.322 && L<=0.644)){
            classe = 3;
        }else if ((i>5 && i<=6) && ( L>0.644 && L<=1.127)){
            classe = 4;
        }else if ((i>5 && i<=6) && ( L>1.127)){
            classe = 5;
        }else if ((i>6 && i<=7) && ( L<=0.161)){
            classe = 1;
        }else if ((i>6 && i<=7) && ( L>0.161 && L<=0.322)){
            classe = 2;
        }else if ((i>6 && i<=7) && ( L>0.322 && L<=0.483)){
            classe = 3;
        }else if ((i>6 && i<=7) && ( L>0.483 && L<=0.644)){
            classe = 4;
        }else if ((i>6 && i<=7) && ( L>0.644)){
            classe = 5;
        }else if ((i>7 && i<=8) && ( L<=0.161)){
            classe = 2;
        }else if ((i>7 && i<=8) && ( L>0.161 && L<=0.322)){
            classe = 3;
        }else if ((i>7 && i<=8) && ( L>0.322 && L<=0.483)){
            classe = 4;
        }else if ((i>7 && i<=8) && ( L>0.483)){
            classe = 5;
        }else if ((i>8 && i<=9) && ( L<=0.161)){
            classe = 2;
        }else if ((i>8 && i<=9) && ( L>0.161 && L<=0.322)){
            classe = 3;
        }else if ((i>8 && i<=9) && ( L>0.322 && L<=0.483)){
            classe = 4;
        }else if ((i>8 && i<=9) && ( L>0.483)){
            classe = 5;
        }else if (i>9 && (L<=0.161)){
            classe = 2;
        }else if (i>9 && (L>0.161 && L<=0.322)){
            classe = 3;
        }else if (i>9 && L>0.322){
            classe = 5;
        }
    }else{
        im = Math.abs(i); //para as descidas
        if(im>1 && im<=-2){
            classe = 1;
        }else if (im>2 && im<=3 && L<=1.449){
            classe = 1;
        }else if (im>2 && im<=3 && L>1.449){
            classe = 2;
        }else if (im>3 && im<=4 && L<=0.483){
            classe = 1;
        }else if (im>3 && im<=4 && L>0.483 && L<=1.127){
            classe = 2;
        }else if (im>3 && im<=4 && L>1.127){
            classe = 3;
        }else if (im>4 && im<=5 && L<0.322){
            classe = 1;
        }else if (im>4 && im<=5 && L>0.322 && L<=0.644){
            classe = 2;
        }else if (im>4 && im<=5 && L>0.644 && L<=1.127){
            classe = 3;
        }else if (im>4 && im<=5 && L>1.127){
            classe = 4;
        }else if (im>5 && im<=6 && L<=0.161){
            classe = 1;
        }else if (im>5 && im<=6 && L>0.161 && L<=0.483){
            classe = 2;
        }else if (im>5 && im<=6 && L>0.483 && L<=0.805){
            classe = 3;
        }else if (im>5 && im<=6 && L>0.805 && L<=1.288){
            classe = 4;
        }else if (im>5 && im<=6 && L>1.288){
            classe = 5;
        }else if (im>6 && im<=7 && L<=0.161){
            classe = 1;
        }else if (im>6 && im<=7 && L>0.161 && L<=0.322){
            classe = 2;
        }else if (im>6 && im<=7 && L>0.322 && L<=0.483){
            classe = 3;
        }else if (im>6 && im<=7 && L>0.483 && L<=0.805){
            classe = 4;
        }else if (im>6 && im<=7 && L>0.805){
            classe = 5;
        }else if (im>7 && im<=8 && L<=0.161){
            classe = 1;
        }else if (im>7 && im<=8 && L>0.161 && L<=0.322){
            classe = 2;
        }else if (im>7 && im<=8 && L>0.322 && L<=0.483){
            classe = 3;
        }else if (im>7 && im<=8 && L>0.483 && L<=0.644){
            classe = 4;
        }else if (im>7 && im<=8 && L>0.644){
            classe = 5;
        }else if (im>8 && im<=9 && L<=0.161){
            classe = 2;
        }else if (im>8 && im<=9 && L>0.161 && L<=0.322){
            classe = 3;
        }else if (im>8 && im<=9 && L>0.322 && L<=0.483){
            classe = 4;
        }else if (im>8 && im<=9 && L>0.483){
            classe = 5;
        }else if (im>9 && L<=0.161){
            classe = 2;
        }else if (im>9 && L>0.161 && L<=0.322){
            classe = 3;
        }else if (im>9 && L>0.322){
            classe = 5;
        }
    }
      return classe
}
//passo 3
function ext_f(classeV,L){
    
}
//Passo 4
function v_f(v,phf){
    return v/phf
}
//passo 5
function BFFS_f(Spl){
    return 1.14*Spl
}
//passo 6
function FFS_f_2022(BFFS,a,HV,fls,fA){
    return BFFS-a*HV-fls-fA
}
//passo 7
function a_f(classe,vo,L,BFFS){
    var array = [];
    let a = 0;
    let a0 = 0;
    let a1 = 0;
    let a2 = 0;
    let a3 = 0;
    let a4 = 0;
    let a5 = 0;
    if(classe==1){
        a0=0;
        a1=0;
        a2=0;
        a3=0;
        a4=0;
        a5=0;
    }else if(classe==2){
        a0=-0.45036;
        a1=0.00814;
        a2=0.01358;
        a3=0.01358;
        a4=0;
        a5=0;
    }else if(classe==3){
        a0=-0.29591;
        a1=0.00743;
        a2=0;
        a3=0.01246;
        a4=0;
        a5=0;
    }else if(classe==4){
        a0=-0.40902;
        a1=0.00975;
        a2=0.00767;
        a3=-0.18363;
        a4=0.00423;
        a5=0;
    }else if(classe==5){
        a0=-0.38360;
        a1=0.01074;
        a2=0.01945;
        a3=-0.69848;
        a4=0.01069;
        a5=0.12700;
    }
    a = Math.max(0.0333,a0+a1*BFFS+a2*L+Math.max(0,a3+a4*BFFS+a5*L)*vo/1000)
    return a
}
//passo 8
function fLS_f_2022(LW,SW){
    return 0.6*(12-LW)+0.7*(6-SW)
}
//passo 9
function fA_f_2022(APD){
    return Math.min(APD/4,10)
}
//passo 10
function S_f_2022(vd,m,p,FFS){
    if (vd<=100){
        return FFS
    }else if(vd>100){
        return FFS-m*((vd/1000)-0.1)**p
    }
}
//passo11
function m1_f_2022(classe,vo,L,HV,FFS){
    let b0 = 0;
    let b1 = 0;
    let b2 = 0;
    let b3 = 0;
    let b4 = 0;
    let b5 = 0;
    let c0 = 0;
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let d0 = 0;
    let d1 = 0;
    let d2 = 0;
    let d3 = 0;
    if (classe==1){
        b0 = 0.0558;
        b1 = 0.0542;
        b2 = 0.3278;
        b3 = 0.1029;
    }else if(classe==2){
        b0 = 5.7280;
        b1=-0.0809;
        b2= 0.7404;
        c0 = -13.8036;
        c1 = 0;
        c2 = 0.2446;
        c3 = 0;
        b3 = c0+c1*Math.sqrt(L)+c2*FFS+c3*(FFS*Math.sqrt(L))
        d0 = -1.7765;
        d2 = 0.0392
        b4 = d0+d1*Math.sqrt(HV)+d2*FFS+d3*(FFS*Math.sqrt(HV))
        b5 = 3.1155
    }else if(classe==3){
        b0 = 9.3079;
        b1=-0.1706;
        b2= 1.1292;
        c0 = -11.9703;
        c1 = 0;
        c2 = 0.2542;
        c3 = 0;
        b3 = c0+c1*Math.sqrt(L)+c2*FFS+c3*(FFS*Math.sqrt(L))
        d0 = -3.555;
        d2 = 0.0826;
        b4 = d0+d1*Math.sqrt(HV)+d2*FFS+d3*(FFS*Math.sqrt(HV))
        b5 = 3.1155
    }else if(classe==4){
        b0 = 9.0115;
        b1=-0.1994;
        b2= 1-8252;
        c0 = -12.5113;
        c1 = 0;
        c2 = 0.2656;
        c3 = 0;
        b3 = c0+c1*Math.sqrt(L)+c2*FFS+c3*(FFS*Math.sqrt(L))
        d0 = -1.7765;
        d2 = 0.1373;
        b4 = d0+d1*Math.sqrt(HV)+d2*FFS+d3*(FFS*Math.sqrt(HV))
        b5 = 3.2685
    }else if(classe==5){
        b0 = 23.9144;
        b1=-0.6925;
        b2= 1.9473;
        c0 = -14.5113;
        c1 = 0;
        c2 = 0.4370;
        c3 = 0;
        b3 = c0+c1*Math.sqrt(L)+c2*FFS+c3*(FFS*Math.sqrt(L))
        d0 = -18.2910;
        d1 = 2.3875;
        d2 = 0.4494;
        d3 = -0.052;
        b4 = d0+d1*Math.sqrt(HV)+d2*FFS+d3*(FFS*Math.sqrt(HV))
        b5 = 3.5115;
    }
    let m = 0;
    m = Math.max(b5,b0+b1*FFS+b2*(Math.sqrt(vo/1000))+Math.max(0,b3)*Math.sqrt(L)+Math.max(0,b4)*Math.sqrt(HV))
    return m
}
function p1_f_2022(classe,FFS,HV,L,vo) {
    let f0 = 0;
    let f1 = 0;
    let f2 = 0;
    let f3 = 0;
    let f4 = 0;
    let f5 = 0;
    let f6 = 0;
    let f7 = 0;
    let f8 = 0;
    if (classe==1){
        f0 = 0.67576;
        f3 = 0.12060;
        f4 = -0.35919;
    }else if (classe==2){
        f0 = 0.34524; 
        f1 = 0.00591;
        f2 = 0.02031;
        f3 = 0.14911;
        f4 = -0.43784;
        f5 = -0.00296;
        f6 = 0.02956;
        f8 = 0.41622;
    }else if (classe==3){
        f0 = 0.17291;
        f1 = 0.00917;
        f2 = 0.05698;
        f3 = 0.27734;
        f4 = -0.61893;
        f5 = -0.00918;
        f6 = 0.09184;
        f8 = 0.41662;
    }else if (classe==4){
        f0 = 0.67689;
        f1 = 0.00534;
        f2 = -0.13037;
        f3 = 0.25699;
        f4 = -0.68465;
        f5 = -0.00709;
        f6 = 0.07087;
        f8 = 0.33950;
    }else if (classe==5){
        f0 = 1.13262;
        f2 =-0.26367;
        f3 = 0.18811;
        f4 = -0.64304;
        f5 = -0.00867;
        f6 = 0.08675;
        f8 = 0.30590;
    }
    let p = 0;
    p = Math.max(f8,f0+f1*FFS+f2*L+f3*(vo/1000)+f4*Math.sqrt(vo/1000)+f5*HV+f6*Math.sqrt(HV)+f7*(L*HV))
    return p
}
//passo 12
function PF_f(m,p,vd){
    return (100*(1-Math.E**(m*((vd/1000)**p))))
}
function m2_f_2022(PFcap,PF25cap,cap){
    return -0.29764*((0-Math.log(1-(PF25cap/100)))/(0.25*(cap/1000)))+-0.71917*((0-Math.log(1-(PFcap/100)))/((cap/1000)))
}
function PFcap_f(classe,L,FFS,HV,vo){
    let b0 = 0
    let b1 = 0
    let b2 = 0
    let b3 = 0
    let b4 = 0
    let b5 = 0
    let b6 = 0
    let b7 = 0
    if (classe==1){
        b0 = 37.68080
        b1 = 3.05089
        b2 = -7.90866
        b3 = -0.94321
        b4 = 13.64266
        b5 = -0.00050
        b6 = -0.05500
        b7 = 7.13758
    }else if(classe==2){
        b0 = 58.21104
        b1 = 5.73387
        b2 = -13.66293
        b3 = -0.66126
        b4 = 9.08575
        b5 = -0.00950
        b6 = -0.03602
        b7 = 7.14619
    }else if(classe==3){
        b0 = 113.20439
        b1 = 10.01778
        b2 = -18.9
        b3 = 0.46542
        b4 = -6.75338
        b5 = -0.0300
        b6 = -0.058
        b7 = 10.03239
    }else if(classe==4){
        b0 = 58.29978
        b1 = -0.53611
        b2 = 7.35076
        b3 = -0.27046
        b4 = 4.49850
        b5 = -0.011
        b6 = -0.02968
        b7 = 8.89680
    }else if(classe==5){
        b0 = 3.32968
        b1 = -0.84377
        b2 = 7.08952
        b3 = -1.32089
        b4 = 19.98477
        b5 = -0.0125
        b6 = -0.02960
        b7 = 9.99453
    }
    return b0+b1*L+b2*Math.sqrt(L)+b3*FFS+b4*Math.sqrt(FFS)+b5*HV+b6*(FFS*(vo/1000))+b7*(Math.sqrt(vo/1000))
}
function PF25cap_f(classe,L,FFS,HV,vo){
    let c0 = 0
    let c1 = 0
    let c2 = 0
    let c3 = 0
    let c4 = 0
    let c5 = 0
    let c6 = 0
    let c7 = 0
    if (classe==1){
        c0 = 18.01780
        c1 = 10
        c2 = -21.6
        c3 = -0.97853
        c4 = 12.05214
        c5 = -0.00750
        c6 = -0.06700
        c7 = 11.60405
    }else if(classe==2){
        c0 = 47.83887
        c1 = 12.8
        c2 = -28.2
        c3 = -0.61758
        c4 = 5.8
        c5 = -0.04550
        c6 = -0.03344
        c7 = 11.35573
    }else if(classe==3){
        c0 = 125.4
        c1 = 19.5
        c2 = -34.9
        c3 = 0.90672
        c4 = -16.1
        c5 = -0.11
        c6 = -0.06200
        c7 = 14.71136
    }else if(classe==4){
        c0 = 103.13534
        c1 = 14.68459
        c2 = -23.72704
        c3 = 0.66444
        c4 = -11.95763
        c5 = -0.1
        c6 = 0.00172
        c7 = 14.70067
    }else if(classe==5){
        c0 = 89
        c1 = 19.02642
        c2 = -34.54240
        c3 = 0.29792
        c4 = -6.62528
        c5 = -0.16
        c6 = -0.00480
        c7 = 17.56611
    }
    return c0+c1*L+c2*Math.sqrt(L)+c3*FFS+c4*Math.sqrt(FFS)+c5*HV+c6*(FFS*(vo/1000))+c7*(Math.sqrt(vo/1000))
}
function p2_f_2022(PFcap,PF25cap,cap){
    return 0.81165+0.37820*(((0-Math.log(1-(PF25cap/100)))/(0.25*(cap/1000))))-0.49524*(((0-Math.log(1-(PFcap/100)))/(cap/1000)))-2.11289*Math.sqrt(((0-Math.log(1-(PF25cap/100)))/(0.25*(cap/1000))))+2.41146*Math.sqrt(((0-Math.log(1-(PFcap/100)))/(0.25*(cap/1000))))
}
//passo final 
function FD_f(PF,vd,S){
    return (PF/100)*(vd/S)
}