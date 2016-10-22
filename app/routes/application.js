import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({

  ajax : Ember.inject.service(),

  model() {

    // return this.store.findAll('event');

    return this.get('ajax').request("https://data.cityofmadison.com/resource/2cz6-h795.json", {
      data: {
        "$limit" : 10,
        "$$app_token" : ENV.APP.SOCRATA_TOKEN
      }
    }).then(response => {
      let data = {
        'events': response
      };
      return this.store.pushPayload(data);
    }).then(() => this.store.peekAll('event'));
  },

  setupController() {
    console.log(arguments);
    this._super(...arguments);
  }
});
