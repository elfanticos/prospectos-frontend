const IP_SERVER = 'ec2-54-90-30-216.compute-1.amazonaws.com';

export const environment = {
  production: true,
  api: `http://${IP_SERVER}:9090`,
  apiService: {
    combos: {
      pais: '/api/combo/pais',
      departamento: '/api/combo/departamento',
      provincia: '/api/combo/provincia',
      distrito: '/api/combo/distrito'
    },
    oauth: {
      token: '/oauth/token'
    }
  }
};
