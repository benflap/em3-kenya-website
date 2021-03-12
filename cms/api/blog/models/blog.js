"use strict";

const slugify = require("@sindresorhus/slugify");

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            if (data.Title) {
                data.slug = slugify(data.Title);
            }
        },
        beforeUpdate: async (params, data) => {
            if (data.Title) {
                data.slug = slugify(data.Title);
            }
        },
    },
};
