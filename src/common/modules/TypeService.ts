import { AnyObject } from "../../domain/types/Types";

export class TypeService {
  public static mapKeys<
    FromType extends AnyObject,
    ToType extends AnyObject,
    FromKey extends keyof FromType = keyof FromType,
    ToKey extends keyof ToType = keyof ToType,
  >(
    data: FromType,
    mapping: [
      from: FromKey,
      to: ToKey,
      mapper?: (item: FromType[FromKey]) => ToType[ToKey],
    ][],
  ): ToType {
    const mappedData: any = {};
    for (const [from, to, mapper] of mapping) {
      if (data[from] === undefined) continue;
      if (typeof mapper === "function") {
        mappedData[to] = mapper(data[from]);
      } else {
        mappedData[to] = data[from];
      }
    }
    return mappedData;
  }

  public static mapKeysArray<
    FromType extends AnyObject,
    ToType extends AnyObject,
    FromKey extends keyof FromType = keyof FromType,
    ToKey extends keyof ToType = keyof ToType,
  >(
    data: FromType[],
    mapping: [
      from: FromKey,
      to: ToKey,
      mapper?: (item: FromType[FromKey]) => ToType[ToKey],
    ][],
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
