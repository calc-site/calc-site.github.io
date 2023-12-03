"use strict";
(() => {
  // src/scripts/Utils.ts
  var Utils = class _Utils {
    static toMoney(value) {
      const strValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return _Utils.truncate(strValue, 12);
    }
    static truncate(value, length) {
      return value.length > length ? value.substring(0, length) + "..." : value;
    }
    static parseInt(value) {
      const num = parseInt(value, 10);
      return !isNaN(num) ? num : void 0;
    }
    static onRangeChange(maxArea, minArea, handler) {
      const formEl = document.querySelector("#area-form");
      const areaRangeEl = formEl?.querySelector("#area-range");
      const areaInputEl = formEl?.querySelector("#area-input");
      if (areaRangeEl instanceof HTMLInputElement && areaInputEl instanceof HTMLInputElement) {
        areaInputEl.addEventListener("blur", (event) => {
          if (!(event.target instanceof HTMLInputElement)) {
            return;
          }
          let value = _Utils.parseInt(event.target.value);
          if (value === void 0) {
            return;
          }
          if (value > maxArea) {
            value = maxArea;
          }
          if (value < minArea) {
            value = minArea;
          }
          event.target.value = value.toString();
          handler(value);
        });
        const handleInputChange = (event, nextInputEl) => {
          if (!(event.target instanceof HTMLInputElement)) {
            return;
          }
          const value = _Utils.parseInt(event.target.value);
          if (value === void 0) {
            return;
          }
          nextInputEl.value = value.toString();
          handler(value);
        };
        areaRangeEl.addEventListener("input", (event) => handleInputChange(event, areaInputEl));
        areaInputEl.addEventListener("input", (event) => handleInputChange(event, areaRangeEl));
      }
    }
    static getPricePerArea(area, less40Price, less100Price, more100Price) {
      if (area < 40) {
        return less40Price;
      }
      if (area < 100) {
        return less100Price;
      }
      return more100Price;
    }
    static getStagePrices(area, less40Price, less100Price, more100Price) {
      const getPricePerArea = (area2) => _Utils.getPricePerArea(area2, less40Price, less100Price, more100Price);
      return {
        getPricePerArea,
        getPrice: (area2) => area2 * getPricePerArea(area2)
      };
    }
    static getStageById(stages, id) {
      return stages.find((stage) => stage.id === id);
    }
    static isStageSelected(stagesIds, id) {
      return stagesIds.includes(id);
    }
  };

  // src/data.ts
  var data = {
    minArea: 40,
    maxArea: 350,
    startArea: 69,
    packages: [
      {
        id: "minimal",
        name: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u043A\u0435\u0442",
        descriptions: [
          "\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u043E\u043C\u0443 \u043D\u0435 \u043D\u0443\u0436\u0435\u043D \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D",
          "\u041D\u0435 \u0433\u043E\u0442\u043E\u0432 \u043A \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0430\u043C, \u043D\u043E \u0445\u043E\u0447\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u0435\u0441\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430",
          "\u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0443\u0436\u0435\u043D \u0432 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0435 \u0441\u0440\u043E\u043A\u0438",
          "\u041F\u0440\u0438\u0432\u044B\u043A \u0441\u0430\u043C \u0440\u0435\u0448\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432"
        ],
        price: 1400,
        packageContent: [
          "\u041F\u043E\u0438\u0441\u043A \u043C\u0435\u0431\u0435\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u043E\u0432\u043A\u0438 \u043D\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0435",
          "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u044B",
          "\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u044F \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438"
        ]
      },
      {
        id: "basic",
        name: "\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043F\u0430\u043A\u0435\u0442",
        descriptions: [
          "\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0434\u0430\u0432\u043D\u043E \u0437\u043D\u0430\u0435\u0442, \u0447\u0442\u043E \u0435\u043C\u0443 \u043D\u0430\u0434\u043E",
          "\u0415\u0441\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043E\u043D \u0433\u043E\u0442\u043E\u0432 \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u0442\u044C \u043D\u0430 \u0440\u0435\u043C\u043E\u043D\u0442",
          "\u041D\u0435 \u0433\u043E\u0442\u043E\u0432 \u043A \u043A\u0440\u0443\u043F\u043D\u044B\u043C \u043F\u0435\u0440\u0435\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0430\u043C, \u043D\u043E \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0442 \u0447\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u044D\u0440\u0433\u043E\u043D\u043E\u043C\u0438\u0447\u043D\u044B\u043C",
          "\u041F\u0440\u043E\u0435\u043A\u0442 \u043D\u0443\u0436\u0435\u043D \u0432 \u0441\u0436\u0430\u0442\u044B\u0435 \u0441\u0440\u043E\u043A\u0438",
          "\u0425\u043E\u0440\u043E\u0448\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043C\u044B\u0448\u043B\u0435\u043D\u0438\u0435"
        ],
        price: 2e3,
        packageContent: [
          "\u0421\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435",
          "\u041F\u043E\u0438\u0441\u043A \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F",
          "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u044B",
          "\u0420\u0430\u0441\u043A\u043B\u0430\u0434\u043A\u0430 \u043F\u043B\u0438\u0442\u043A\u0438 \u0434\u043B\u044F \u0441\u0442\u0435\u043D",
          "\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u0441\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u0438",
          "\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u044F \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438",
          "\u0412\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u043E\u0442\u0434\u0435\u043B\u043A\u0438 \u0438 \u0434\u0432\u0435\u0440\u0435\u0439"
        ]
      },
      {
        id: "optimal",
        name: "\u041E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0430\u043A\u0435\u0442",
        descriptions: [
          "\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441\u043E \u0441\u0442\u0438\u043B\u0435\u043C \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435",
          "\u0413\u043E\u0442\u043E\u0432 \u043A \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C\u0443 \u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u043C\u0443 \u0440\u0435\u043C\u043E\u043D\u0442\u0443",
          "\u0425\u043E\u0447\u0435\u0442 \u043F\u043E\u0434\u0431\u043E\u0440 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0430",
          "\u041F\u043E\u043D\u0438\u043C\u0430\u0435\u0442, \u0447\u0442\u043E \u0445\u043E\u0440\u043E\u0448\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442 - \u044D\u0442\u043E \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u0440\u0435\u043C\u044F"
        ],
        price: 3e3,
        packageContent: [
          "\u0421\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435",
          "\u041F\u043E\u0438\u0441\u043A \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F",
          "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439",
          "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u044B",
          "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u043A\u0438 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439",
          "\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F",
          "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C",
          "\u0420\u0430\u0431\u043E\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0447\u0430\u0442 \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0432\u0441\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430"
        ]
      },
      {
        id: "full",
        name: "\u041F\u043E\u043B\u043D\u044B\u0439 \u043F\u0430\u043A\u0435\u0442",
        descriptions: [
          "\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441\u043E \u0441\u0442\u0438\u043B\u0435\u043C \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435",
          "\u0413\u043E\u0442\u043E\u0432 \u043A \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u043C\u0443 \u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u043C\u0443 \u0440\u0435\u043C\u043E\u043D\u0442\u0443",
          "\u0425\u043E\u0447\u0435\u0442 \u043F\u043E\u0434\u0431\u043E\u0440 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430 \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0430",
          "\u0425\u043E\u0447\u0435\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0445 \u043F\u043E\u0434\u0431\u043E\u0440\u043E\u0432 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438 \u043C\u0435\u0431\u0435\u043B\u0438",
          "\u041F\u043E\u043D\u0438\u043C\u0430\u0435\u0442, \u0447\u0442\u043E \u0445\u043E\u0440\u043E\u0448\u0438\u0439 \u0440\u0435\u043C\u043E\u043D\u0442 - \u044D\u0442\u043E \u0432\u0441\u0435\u0433\u0434\u0430 \u0432\u0440\u0435\u043C\u044F"
        ],
        price: 3300,
        packageContent: [
          "\u0421\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435",
          "\u041F\u043E\u0438\u0441\u043A \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u043E\u0433\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F",
          "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439",
          "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043B\u0430\u043D\u044B",
          "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0437\u0432\u0435\u0440\u0442\u043A\u0438 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0439",
          "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F",
          "\u0421\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F",
          "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C \u0441 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u0443\u043F\u0430",
          "\u0420\u0430\u0431\u043E\u0442\u0430 \u0447\u0435\u0440\u0435\u0437 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u0447\u0430\u0442 \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0432\u0441\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430",
          "\u041F\u0430\u043D\u043E\u0440\u0430\u043C\u044B \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F 360\xBA"
        ]
      }
    ],
    initialStages: [
      "planning_solution",
      "stylized_solution",
      "visualization",
      "construction_plans",
      "specification"
    ],
    stages: [
      {
        id: "planning_solution",
        name: "\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043E\u0447\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435",
        getPricePerArea: (area) => Utils.getPricePerArea(area, 500, 450, 400),
        getPrice: (area) => Utils.getPricePerArea(area, 500, 450, 400) * area
      },
      {
        id: "stylized_solution",
        name: "\u0421\u0442\u0438\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435",
        getPricePerArea: (area) => Utils.getPricePerArea(area, 550, 500, 450),
        getPrice: (area) => Utils.getPricePerArea(area, 550, 500, 450) * area
      },
      {
        id: "visualization",
        name: "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F",
        getPricePerArea: (area) => Utils.getPricePerArea(area, 700, 650, 500),
        getPrice: (area) => Utils.getPricePerArea(area, 700, 650, 500) * area
      },
      {
        id: "panorama",
        name: "\u041F\u0430\u043D\u043E\u0440\u0430\u043C\u044B \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F 360\xBA",
        getPricePerArea: (area) => Utils.getPricePerArea(area, 600, 550, 500),
        getPrice: (area) => Utils.getPricePerArea(area, 600, 550, 500) * area
      },
      {
        id: "construction_plans",
        name: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0447\u0435\u0440\u0442\u0435\u0436\u0438",
        getPricePerArea: (area) => Utils.getPricePerArea(area, 1300, 1200, 1100),
        getPrice: (area) => Utils.getPricePerArea(area, 1300, 1200, 1100) * area
      },
      {
        id: "specification",
        name: "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u043E\u0432\u043E\u0447\u043D\u0430\u044F \u0432\u0435\u0434\u043E\u043C\u043E\u0441\u0442\u044C",
        getPricePerArea: (area) => {
          if (area < 40) {
            return 35e3;
          }
          return 5e4;
        },
        getPrice: (area) => {
          if (area < 40) {
            return 35e3;
          }
          return 5e4;
        }
      }
    ]
  };

  // src/scripts/packages.ts
  var onPackagesPageLoad = (data2) => {
    const updateDescriptionHeight = () => {
      const descriptionElsList = document.querySelectorAll(".description");
      let height = 0;
      for (const descriptionEl of descriptionElsList) {
        const listEl = descriptionEl.querySelector(".list");
        if (!listEl) {
          continue;
        }
        if (listEl.clientHeight > height) {
          height = listEl.clientHeight;
        }
      }
      for (const description of descriptionElsList) {
        if (description instanceof HTMLElement) {
          description.style.minHeight = `${height + 60}px`;
        }
      }
    };
    updateDescriptionHeight();
    addEventListener("resize", () => updateDescriptionHeight());
    Utils.onRangeChange(
      data2.maxArea,
      data2.minArea,
      (value) => {
        for (const pkg of data2.packages) {
          const areaValueEl = document.querySelector(`#${pkg.id} .area .value`);
          if (areaValueEl) {
            areaValueEl.innerHTML = Utils.truncate(value.toString(), 10);
          }
          const projectPriceEl = document.querySelector(`#${pkg.id} .project-price .value`);
          if (projectPriceEl) {
            projectPriceEl.innerHTML = Utils.toMoney(pkg.price * value);
          }
        }
      }
    );
    const packagesList = document.querySelectorAll(".package");
    for (const pkg of packagesList) {
      pkg.querySelector(".package-content .toggle-button")?.addEventListener(
        "click",
        (event) => {
          event.preventDefault();
          pkg.querySelector(".package-content .content")?.classList.toggle("active");
          const toggleButtonIconEl = pkg.querySelector(".package-content .toggle-button i");
          if (!toggleButtonIconEl) {
            return;
          }
          if (toggleButtonIconEl.classList.contains("fa-chevron-circle-right")) {
            toggleButtonIconEl.classList.remove("fa-chevron-circle-right");
            toggleButtonIconEl.classList.add("fa-chevron-circle-down");
          } else {
            toggleButtonIconEl.classList.remove("fa-chevron-circle-down");
            toggleButtonIconEl.classList.add("fa-chevron-circle-right");
          }
        }
      );
    }
  };

  // src/scripts/stages.ts
  var onStagesPageLoad = (data2) => {
    let checkedStages = [...data2.initialStages];
    const updateDescriptionHeight = () => {
      const descriptionElsList = document.querySelectorAll(".description");
      let height = 0;
      for (const descriptionEl of descriptionElsList) {
        const headerEl = descriptionEl.querySelector("h2");
        if (!headerEl) {
          continue;
        }
        if (headerEl.clientHeight > height) {
          height = headerEl.clientHeight;
        }
      }
      for (const description of descriptionElsList) {
        if (description instanceof HTMLElement) {
          description.style.minHeight = `${height + 40}px`;
        }
      }
      const stageEl = document.querySelector(".stage");
      const stagesTotalEl = document.querySelector(".stages-total");
      if (stageEl instanceof HTMLElement && stagesTotalEl instanceof HTMLElement) {
        stagesTotalEl.style.minHeight = `${stageEl.clientHeight - 20}px`;
      }
    };
    updateDescriptionHeight();
    addEventListener("resize", () => updateDescriptionHeight());
    const updateTotalPrice = (area) => {
      let totalPrice = 0;
      for (const stageId of checkedStages) {
        const stage = Utils.getStageById(data2.stages, stageId);
        if (!stage) {
          continue;
        }
        totalPrice += stage.getPrice(area);
      }
      const totalPriceEl = document.querySelector(".total .value");
      if (totalPriceEl) {
        totalPriceEl.innerHTML = Utils.toMoney(totalPrice);
      }
    };
    const updateStages = (stageId) => {
      if (checkedStages.includes(stageId)) {
        checkedStages.splice(checkedStages.indexOf(stageId), 1);
      } else {
        checkedStages.push(stageId);
      }
      for (const stageEl of document.querySelectorAll(".stage")) {
        if (!(stageEl instanceof HTMLElement)) {
          continue;
        }
        const checkedEl = stageEl.querySelector(".stage-checked");
        if (checkedStages.includes(stageEl.id)) {
          checkedEl?.classList.add("active");
        } else {
          checkedEl?.classList.remove("active");
        }
      }
      const stagesListEl = document.querySelector(".stages-list");
      if (stagesListEl) {
        let itemsListStr = "";
        for (const stageId2 of checkedStages) {
          const stage = Utils.getStageById(data2.stages, stageId2);
          if (!stage) {
            continue;
          }
          itemsListStr += `<li>${stage.name}</li>`;
        }
        if (itemsListStr === "") {
          itemsListStr = "<li>\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E</li>";
        }
        stagesListEl.innerHTML = itemsListStr;
      }
      const areaInputEl = document.querySelector("#area-input");
      if (areaInputEl instanceof HTMLInputElement) {
        const value = Utils.parseInt(areaInputEl.value);
        if (value !== void 0) {
          updateTotalPrice(value);
        }
      }
    };
    for (const stageEl of document.querySelectorAll(".stage")) {
      stageEl.addEventListener("click", (event) => {
        if (!(event.target instanceof HTMLElement)) {
          return;
        }
        updateStages(stageEl.id);
      });
    }
    Utils.onRangeChange(
      data2.maxArea,
      data2.minArea,
      (value) => {
        const hintAreaValueEl = document.querySelector(".hint .value");
        if (hintAreaValueEl) {
          hintAreaValueEl.innerHTML = Utils.truncate(value.toString(), 10);
        }
        for (const stage of data2.stages) {
          const areaValueEl = document.querySelector(`#${stage.id} .area .value`);
          if (areaValueEl) {
            areaValueEl.innerHTML = Utils.truncate(value.toString(), 10);
          }
          const priceEl = document.querySelector(`#${stage.id} .price .value`);
          if (priceEl) {
            priceEl.innerHTML = Utils.toMoney(stage.getPricePerArea(value));
          }
          const stagePriceEl = document.querySelector(`#${stage.id} .stage-price .value`);
          if (stagePriceEl) {
            stagePriceEl.innerHTML = Utils.toMoney(stage.getPrice(value));
          }
        }
        updateTotalPrice(value);
      }
    );
  };

  // src/scripts/index.ts
  (function() {
    if (document.querySelector("#packages")) {
      onPackagesPageLoad(data);
    }
    if (document.querySelector("#stages")) {
      onStagesPageLoad(data);
    }
  })();
})();
