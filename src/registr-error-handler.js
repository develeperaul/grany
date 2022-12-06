import { HTTPError, TimeoutError} from 'ky';

export default (app) => {
  app.config.errorHandler = function (err, vm, info) {
    if(err instanceof HTTPError) {

      if (err.response.status === 429) return vm.$notify({
        group: 'error',
        type: 'error',
        text: 'Вы превысили максимальное количество попыток'
      });

      if (err.response.status === 404) return vm.$notify({
        group: 'error',
        type: 'error',
        text: '404 - Не удалось найти запрашиваемый ресурс'
      });

      return vm.$notify({
        group: 'error',
        type: 'error',
        text: 'Произошла ошибка на сервере'
      });

    } else if(err instanceof TimeoutError) {

      return vm.$notify({
        group: 'error',
        type: 'error',
        text: 'Истекло время ожидания запроса'
      });

    }

    console.error("global", err);
  }


  window.addEventListener("error", (errMessage) => {
    console.error("global", errMessage);
  });

  window.onunhandledrejection = function (e) {
    console.error("global", e);
  }
}
