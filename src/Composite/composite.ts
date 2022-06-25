import { Folder } from "./Folder.js";
import { File } from "./File.js";

export function composite() {
    let folder1 = new Folder("1", []);
    let folder2 = new Folder("2", []);
    let folder3 = new Folder("3", []);
    let folder4 = new Folder("4", []);
    let file1 = new File("file1");
    let file2 = new File("file2");
    let file3 = new File("file3");

    folder1.add(folder2);
    folder1.add(folder3);
    folder1.add(file1);
    folder2.add(folder4);
    folder2.add(file2);
    folder4.add(file3);

    folder1.read();
}