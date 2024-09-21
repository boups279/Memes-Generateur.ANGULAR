import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('access_token'); // Récupérer le token du localStorage (ou sessionStorage)

  // Si un token existe, on clone la requête et on ajoute le token dans les en-têtes
  if (token) {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(clonedReq); // On passe la requête modifiée avec le token
  }

  // Si pas de token, on passe la requête originale
  return next(req);
};
