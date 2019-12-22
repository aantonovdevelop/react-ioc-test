import React from "react";
import {DataService} from "../services/data-service";
import {container} from "../inversify/container";
import {Types} from "../inversify/types";

export class DataView extends React.Component<{}, { value: number }> {
    private service: DataService = container.get(Types.DataService);

    constructor(props: React.Props<{}>) {
        super(props);

        this.service.onChange(() => {
            this.setState({value: this.service.value});
        });
    }

    render() {
        return (
            <div className="data-view-value">Value: {this.service.value}</div>
        )
    }
}
