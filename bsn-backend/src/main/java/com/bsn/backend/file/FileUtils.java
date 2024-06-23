package com.bsn.backend.file;

/*
 *
 *@author Sudhanshu Chaubey on 6/23/2024
 *
 */

import lombok.extern.slf4j.*;
import org.apache.commons.lang3.*;

import java.io.*;
import java.nio.file.*;

@Slf4j
public class FileUtils {

    public static byte[] readFile(String fileUrl) {
        if(StringUtils.isBlank(fileUrl)) {
            return null;
        }

        try {
            Path filePath = new File(fileUrl).toPath();
            return Files.readAllBytes(filePath);
        } catch (IOException e) {
            log.error("No file found in the path {}", fileUrl);
        }
        return new byte[0];
    }
}
