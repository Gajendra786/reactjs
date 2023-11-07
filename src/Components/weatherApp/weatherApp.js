import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  Container,
  Card,
  CardContent,
  Grid,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  IconButton,
} from "@mui/material";
import axios from "axios";
import { Close } from "@mui/icons-material";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [temperatureUnit, setTemperatureUnit] = useState("Celsius"); // Default: Celsius

  // useEffect(() => {
  //   if (city) {
  //     fetchWeatherData();
  //   }
  // }, [city, temperatureUnit]);

  const fetchWeatherData = async () => {
    try {
      if (city) {
        setLoading(true);

        const options = {
          method: "GET",
          url: "https://weatherapi-com.p.rapidapi.com/current.json",
          params: { q: city },
          headers: {
            "X-RapidAPI-Key":
              "rapid-api-key",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
        };
        const response = await axios.request(options);
        setWeatherData(response.data)
      } else {
        setError("Please provide a valid city name!!!");
      }
    } catch (error) {
      setWeatherData(null);
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleTemperatureUnitChange = (event) => {
    setTemperatureUnit(event.target.value);
  };

  const handleClear = () => {
    setCity("");
    setWeatherData(null);
    setError("");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card sx={{ backgroundColor: "#f3f3f3", borderRadius: 3 }}>
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{ color: "#333333" }}
          >
            Weather App
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              label="Enter City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              variant="outlined"
              sx={{ mb: 2, width: "100%" }}
            />
            <FormControl component="fieldset" sx={{ mb: 2 }}>
              <RadioGroup
                row
                aria-label="temperatureUnit"
                name="temperatureUnit"
                value={temperatureUnit}
                onChange={handleTemperatureUnitChange}
              >
                <FormControlLabel
                  value="Celsius"
                  control={<Radio />}
                  label="Celsius"
                />
                <FormControlLabel
                  value="Fahrenheit"
                  control={<Radio />}
                  label="Fahrenheit"
                />
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              onClick={fetchWeatherData}
              sx={{ mt: 2, backgroundColor: "#4caf50", color: "#ffffff" }}
            >
              Get Weather
            </Button>
            {loading && <CircularProgress sx={{ mt: 2 }} />}
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
            {weatherData && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Card
                      variant="outlined"
                      sx={{
                        backgroundColor: "#f9f9f9",
                        borderRadius: 8,
                        p: 2,
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        position: "relative",
                        mt: 2,
                      }}
                    >
                      <IconButton
                        onClick={handleClear}
                        sx={{
                          color: "#f44336",
                          position: "absolute",
                          top: 12,
                          right: 8,
                        }}
                      >
                        <Close />
                      </IconButton>
                      <CardContent>
                        <Typography
                          variant="h5"
                          align="center"
                          sx={{ color: "#333333", mb: 2 }}
                        >
                          {weatherData.location.name},{weatherData.location.region}, {weatherData.location.country}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="h6" sx={{ color: "#333333" }}>
                            {temperatureUnit === "Celsius" ? `${weatherData.current.temp_c} °C` : `${weatherData.current.temp_f} °F`}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 2,
                          }}
                        >
                          <Typography variant="body2" sx={{ color: "#777777" }}>
                            Humidity {weatherData.current.humidity}%
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default WeatherApp;
