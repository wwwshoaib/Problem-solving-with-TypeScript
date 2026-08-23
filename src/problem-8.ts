interface GeneralPatient {
    name: string;
    age: number;
    type: "general";
}

interface EmergencyPatient {
    name: string;
    age: number;
    type: "emergency";
    emergencyLevel: 1 | 2 | 3;
}

function getPatientStatus(
    patient: GeneralPatient | EmergencyPatient
): string {
    if (patient.type === "general") {
        return "General Patient";
    }

    if (patient.emergencyLevel === 1) {
        return "Critical Emergency Patient";
    } else if (patient.emergencyLevel === 2) {
        return "Serious Emergency Patient";
    } else {
        return "Moderate Emergency Patient";
    }
}

const patient1: GeneralPatient = {
    name: "Robin",
    age: 35,
    type: "general"
};

const patient2: EmergencyPatient = {
    name: "Sobuj",
    age: 42,
    type: "emergency",
    emergencyLevel: 1
};

console.log(getPatientStatus(patient1));
// General Patient

console.log(getPatientStatus(patient2));
// Critical Emergency Patient