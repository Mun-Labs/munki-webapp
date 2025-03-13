import { AnyObject } from "../../domain/types/Types";

export class TypeService {
  public static mapKeys<FromType extends AnyObject, ToType extends AnyObject>(
    data: FromType,
    mapping: [from: keyof FromType, to: keyof ToType][],
  ): ToType {
    const mappedData: any = {};
    for (const [from, to] of mapping) {
      if (data[from] !== undefined) {
        mappedData[to] = data[from];
      }
    }
    return mappedData;
  }

  public static mapKeysArray<
    FromType extends AnyObject,
    ToType extends AnyObject,
  >(
    data: FromType[],
    mapping: [from: keyof FromType, to: keyof ToType][],
  ): ToType[] {
    return data.map((item) => this.mapKeys(item, mapping));
  }
}

//const hi = {
//  hi: "hi",
//  bye: "bye",
//};
//
//const okay = {
//  okay: "okay",
//};
//
//interface IHi {
//  hi: string;
//  bye: string;
//}
//
//interface IOkay {
//  okay: string;
//}
// const result = TypeService.mapKeys<IHi, IOkay>(hi, [["hi", "okay"]]);
