const Pet = require('../models/pets');

const petPost = (req, resp) => {

    const { name, type, description, skill1, skill2, skill3, likes } = req.body;

    const pet = new Pet();

    pet.name = name;
    pet.type = type;
    pet.description = description;

    if (skill1) {
        pet.skill1 = skill1;
    }

    if (skill2) {
        pet.skill2 = skill2;
    }

    if (skill3) {
        pet.skill3 = skill3;
    }

    pet.likes = likes;

    pet.save()
        .then(pet => resp.status(200).json({ message: "Success", pet }))
        .catch(error => {

            if ('11000' == error.code) {

                error = {
                    "errors": {
                        "quote": {
                            "name": "ValidatorError",
                            "message": "name must be unique",
                            "properties": {
                                "message": "name must be unique",
                                "type": "unique",
                                "path": "name",
                                "value": ""
                            },
                            "kind": "unique",
                            "path": "name",
                            "value": ""
                        }
                    },
                    "_message": "name must be unique",
                    "name": "ValidationError",
                    "message": "name validation failed: quote: quote required"
                }

                resp.status(400).json({ message: "Fail", error })

            } else {
                resp.status(400).json({ message: "Fail", error })
            }
        }

        );

}

const petsGet = (req, resp) => {

    Pet.find().sort('type')
        .then(pets => {
            resp.status(200).json({ message: 'Success', pets });
        })
        .catch(error => resp.json({ message: "Fail", error }));

}

const petGet = (req, resp) => {

    const { id } = req.params;

    Pet.findById(id)
        .then(pet => {
            if (pet) {
                resp.status(200).json({ message: "Success", pet })
            } else {
                resp.status(404).json({ message: "Not found" })
            }
        })
        .catch(error => resp.status(400).json({ message: "Fail", error }));

}

const petPut = (req, resp) => {


    const { id } = req.params;
    const { name, type, description, skill1, skill2, skill3, likes } = req.body;

    let pet = {
        name: name,
        type: type,
        description: description,
        skill1: skill1,
        skill2: skill2,
        skill3: skill3,
        likes: likes
    }

    Pet.findByIdAndUpdate(id, pet, { new: true, runValidators: true })
        .then(_pet => {
            if (_pet) {
                resp.status(200).json({ message: "Success", pet: _pet })
            } else {
                resp.status(404).json({ message: "Not found" })
            }
        })
        .catch(error => resp.status(400).json({ message: "Fail", error }));

}

const petsDelete = (req, resp) => {

    const { id } = req.params;

    Pet.findByIdAndDelete(id)
        .then(pet => {
            resp.status(200).json({ message: 'Success', pet })
        })
        .catch(error => {
            resp.status(500).json({ message: 'Fail', error })
        });

}

module.exports = {
    petPost,
    petsGet,
    petGet,
    petPut,
    petsDelete
}