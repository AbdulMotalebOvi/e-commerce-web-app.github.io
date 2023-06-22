export default function useObjectMap(arrayOfObjects) {
    const mergedObject = arrayOfObjects?.map(
        (accumulator, currentObject) => ({
            ...accumulator,
            ...currentObject,
        }),
        {}
    );

    return mergedObject;
}
