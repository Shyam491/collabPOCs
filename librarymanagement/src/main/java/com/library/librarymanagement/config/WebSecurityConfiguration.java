package com.library.librarymanagement.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration {

	@Autowired
	private UserDetailsService userDetailsService;

	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();

		provider.setUserDetailsService(userDetailsService);
		provider.setPasswordEncoder(new BCryptPasswordEncoder());

		return provider;
	}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf().disable().authorizeHttpRequests()
		         .requestMatchers(new AntPathRequestMatcher("/"))
		         .permitAll()
				.requestMatchers(new AntPathRequestMatcher("/books")).hasAuthority("USER")
				.requestMatchers(new AntPathRequestMatcher("/admin")).hasAuthority("ADMIN")
				.requestMatchers(new AntPathRequestMatcher("/add/book")).hasAuthority("ADMIN")
				.requestMatchers(new AntPathRequestMatcher("/delete/book/{id}")).hasAuthority("ADMIN")
				.requestMatchers(new AntPathRequestMatcher("/update/book")).hasAuthority("ADMIN").anyRequest().authenticated()
		         .and().httpBasic();

		http.authenticationProvider(authenticationProvider());

		return http.build();
	}

}
