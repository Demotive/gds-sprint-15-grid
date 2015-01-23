var offlineServices = [
  blood_donor_appointments_json,
  carers_allowance_json,
  driving_test_practical_public_json,
  govuk_json,
  licensing_json,
  prison_visits_json,
  register_to_vote_json,
  registered_traveller_scheme_json,
  sorn_json,
  tax_disc_json,
  view_driving_record_json
];

var updateUsersOffline = function() {
  for (var i=0; i<offlineServices.length; i++) {
    console.log(offlineServices[i]['data'].length);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////

$(function() {
  if (offline === true) {
    updateUsersOffline();
    var pollServices = window.setInterval(updateUsersOffline, 30*1000);
  }
});
