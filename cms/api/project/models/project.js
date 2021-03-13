"use strict";

const slugify = require("@sindresorhus/slugify");

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            console.log(data);
            if (data.project_name) {
                data.slug = slugify(data.project_name);
            }
        },
        beforeUpdate: async (params, data) => {
            if (true) {
                data.slug = slugify(data.project_name);
            }
        },
    },
};
