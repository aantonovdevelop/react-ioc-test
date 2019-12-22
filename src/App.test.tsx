import React from 'react';
import App from './App';

import assert from "assert";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {DataView} from "./components/DataView";
import {container} from "./inversify/container";
import {Types} from "./inversify/types";
import {DataService} from "./services/data-service";

Enzyme.configure({adapter: new Adapter()});

describe("<App />", function () {
    it("should check render value", function () {
        const wrapper = shallow((<App />));

        assert.equal(wrapper.find(DataView).length, 1);
    });
});

describe("<DataView />", function () {
    beforeEach(function () {
        container.unbindAll();
    });

    it("should check value render", function () {
        container.bind(Types.DataService).toConstantValue({value: 12345, onChange: () => {}});

        const wrapper = shallow((<DataView />));

        assert.equal(wrapper.find(".data-view-value").text(), "Value: 12345");
    });
});

describe("DataService", function () {
    it('should get value', function () {
        const service = new DataService();

        assert.equal(service.value, 0);
    });
});
