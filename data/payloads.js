const customer = {
    customer_uuid: "6d2a96fa-f675-4b12-a3d1-a12627e7ca81"
}

const matches = {
        ssn: "6663835751",
        email: "testcase25@amount.com"
}

const update_identity = {
    customer_uuid: "6d2a96fa-f675-4b12-a3d1-a12627e7ca81",
    data: {
        first_name: "DANN",
        last_name: "SCHREINERR",
        full_name: "DAN SCHREINERR",
        ssn: "666383753",
        date_of_birth: "1975-03-03",
        phone: "+12028736542"
    }
}

const update_profile_info = {
    customer_uuid: "6d2a96fa-f675-4b12-a3d1-a12627e7ca81",
    address: {
        address_1: "2841 CROSSCREEK CIR",
        city: "WESTFIELD",
        state: "IN",
        zip: "46074"
    },
    payment_methods: {
        bank_account_info: {
            account_type: "checking",
            account_number: "568190053184",
            routing_number: "666202134"
        }
    },
    contact_info: {
        phone: [
            {
                number: "1112223333",
                phone_type: "home",
                do_not_call: false,
                do_not_auto_dial: false,
                do_not_sms: false,
                primary_phone: false
            }
        ],
        email: "testcase1@amount.com"
    },
    
    employment: {
        employer_name: "self_employed",
        employer_phone: "2112223333",
        do_not_call_employer_phone: false,
        do_not_auto_dial_employer_phone: false,
        do_not_sms_employer_phone: false
    },
    consent: {
        do_not_call: false,
        do_not_email: false,
        do_not_robocall: false,
        do_not_mail: false,
        do_not_sms: false,
        do_not_marketing_robocall: false,
        do_not_share_information: false,
        electronic_communications_consent: true,
        cease_and_desist: false,
        creditworthiness_information_sharing_consent: false,
        affiliates_marketing_consent: false,
        non_affiliates_marketing_consent: false
    }
}

exports.customer = customer;
exports.matches = matches;
exports.update_identity = update_identity;
exports.update_profile_info = update_profile_info;