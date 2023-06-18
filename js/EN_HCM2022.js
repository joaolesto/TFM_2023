// Função de ATS
function ATS_f(FFS,vp,fnp){
    ATS=FFS-0.0125*vp-fnp
    return ATS
}

 // Expressão de cálculo do FHV
  function f_HV(PT, ET, PR, ER) {
   
    return 1 / (1 + (PT / 100) * (ET - 1) + (PR / 100) * (ER - 1));
}

 // Expressão de cálculo do vp
function v_p(V, PHF, fg, fhv) {
    return V / (PHF * fg * fhv);
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

 // Expressão de cálculo do Fa
function f_a(a){
    let fa=0
    fa=(4/6)*a
    if (a>=24){
        fa=16
    }
    return fa
}
