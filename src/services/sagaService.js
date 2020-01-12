class SagaService {
  sagas = [];

  registerSaga = saga => {
    this.sagas = [...this.sagas, saga];
  };

  activateSagas = () => {
    return this.sagas.map(saga => saga());
  };
}

const sagaService = new SagaService();
export default sagaService;
