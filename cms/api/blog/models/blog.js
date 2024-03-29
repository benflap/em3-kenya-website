"use strict";

const slugify = require("@sindresorhus/slugify");

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
            if (data.title) {
                data.slug = slugify(data.title);
            }
        },
        beforeUpdate: async (params, data) => {
            if (data.title) {
                data.slug = slugify(data.title);
            }
        },
    },
};
