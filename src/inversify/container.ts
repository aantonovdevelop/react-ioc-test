import {Container} from "inversify";
import {DataService} from "../services/data-service";
import {Types} from "./types";

const container = new Container();

container.bind<DataService>(Types.DataService).to(DataService);

export {container};
