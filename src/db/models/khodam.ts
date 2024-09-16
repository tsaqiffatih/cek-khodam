import { ObjectId } from "mongodb";
import { database } from "../config";
import { typeKhodam } from "@/validators/khodamValidators";



class KhodamModel {
    static collection() {
        return database.collection<typeKhodam>("list_khodam")
    }

    static async getAllKhodam() {
		try {
			const khodam = await KhodamModel.collection().find().toArray();
			return khodam;
		} catch (error) {
			console.log(error);
		}
	}
}

export default KhodamModel;
