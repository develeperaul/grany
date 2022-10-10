import { HTTPError, TimeoutError} from 'ky';

export default (app) => {
  app.config.errorHandler = function (err, vm, info) {
    if(err instanceof HTTPError) {

      if (err.response.status === 429) return vm.$notify({
        group: 'error',
        type: 'error',
        text: 'Вы превысили максимальное количество попыток'
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
  }
}
