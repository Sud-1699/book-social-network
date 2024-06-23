package com.bsn.backend.file;

/*
 *
 *@author Sudhanshu Chaubey on 6/23/2024
 *
 */

import jakarta.validation.constraints.*;
import lombok.*;
import lombok.extern.slf4j.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.*;
import org.springframework.web.multipart.*;

import java.io.*;
import java.nio.file.*;

import static java.io.File.separator;
import static java.lang.System.currentTimeMillis;

@Service
@Slf4j
@RequiredArgsConstructor
public class FileStorageService {

    @Value("${application.file.upload.photo-output-path}")
    private String fileUploadPath;

    public String saveFile(
            @NotNull Integer userId,
            @NotNull MultipartFile file) {
        final String fileUploadSubPath = "users" + separator + userId;
        return uploadFile(fileUploadSubPath, file);
    }

    private String uploadFile(
            @NotNull String fileUploadSubPath,
            @NotNull MultipartFile file) {
        final String uploadPath = fileUploadPath + separator + fileUploadSubPath;
        File targetFolder = new File(uploadPath);
        if(!targetFolder.exists()) {
            boolean folderCreated = targetFolder.mkdirs();
            if(!folderCreated) {
                log.warn("Failed to create the target folder.");
                return null;
            }
        }

        final String fileExtension = getFileExtension(file.getOriginalFilename());
        String targetFilePath = uploadPath + separator + currentTimeMillis() + "." + fileExtension;
        Path targetPath = Paths.get(targetFilePath);
        try {
            Files.write(targetPath, file.getBytes());
            log.info("File saved to " + targetFilePath);
            return targetFilePath;
        } catch (IOException e) {
            log.error("File was not saved", e);
        }
        return null;
    }

    private String getFileExtension(String fileName) {
        if(fileName == null || fileName.isEmpty()) {
            return "";
        }
        int extIndex = fileName.lastIndexOf(".");
        if(extIndex == -1) {
            return "";
        }
        return fileName.substring(extIndex + 1).toLowerCase();
    }

}
