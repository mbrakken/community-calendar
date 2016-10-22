import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr('string'),
  citySponsored: DS.attr('boolean'),
  contact: DS.attr('string'),
  cost: DS.attr(),
  description: DS.attr(),
  district: DS.attr(),
  endDate: DS.attr('date'),
  eventTime: DS.attr(),
  location: DS.attr(),
  startDate: DS.attr('date'),
  title: DS.attr()
});
