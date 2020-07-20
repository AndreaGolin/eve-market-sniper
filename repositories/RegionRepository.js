const Region = require('../models/Region');

class RegionRepository {

    constructor(model) {
        this.model = model;
    }

    // create a new todo
    create(name, regionId) {
        console.log("Dentro regionRepo, name: "+ name +", regionId: "+ regionId +"");
        const newRegion = { name, regionId  };
        console.log(newRegion);
        const region = new this.model(newRegion);

        return region.save();
    }

    // return all todos
    findAll() {
        return this.model.find();
    }

}

module.exports = new RegionRepository(Region);