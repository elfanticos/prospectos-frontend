const IP_SERVER = 'ec2-54-90-30-216.compute-1.amazonaws.com';

export const environment = {
  production: false,
  api: `http://${IP_SERVER}:9090`,
  apiService: {
    combos: {
      pais: '/api/combo/pais',
      departamento: '/api/combo/departamento',
      provincia: '/api/combo/provincia',
      distrito: '/api/combo/distrito',
      procesador: '/api/combo/procesador',
      ram: '/api/combo/ram',
      disco: '/api/combo/disco',
      sistema: '/api/combo/sistema'
    },
    oauth: {
      token: '/oauth/token'
    }
  }
};
