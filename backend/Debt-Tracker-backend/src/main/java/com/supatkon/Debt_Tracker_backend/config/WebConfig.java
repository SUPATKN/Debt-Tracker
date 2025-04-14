package com.supatkon.Debt_Tracker_backend.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class WebConfig implements WebMvcConfigurer{
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // อนุญาต CORS สำหรับทุก endpoint
                .allowedOrigins("http://localhost:4200/")  // ระบุ origin ที่อนุญาต
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // ระบุ methods ที่อนุญาต
                .allowedHeaders("Content-Type", "Authorization")  // ระบุ headers ที่อนุญาต
                .allowCredentials(true)  // อนุญาต credentials (cookies, HTTP authentication)
                .maxAge(3600);  // Cache การตอบสนอง CORS เป็นเวลา 1 ชั่วโมง
    }
}
