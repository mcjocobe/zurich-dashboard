module JsonParsing where

import Text.JSON

data Station = Station {
  id :: String,
  name :: String,
  score :: Maybe String,
  coordinate :: Coordinate,
  distance :: Maybe String
} deriving (Show)

data Coordinate = Coordinate {
  type :: String,
  x :: Double,
  y :: Double
} deriving (Show)

data Stop = Stop {
  station :: Station,
  arrival :: Maybe String,
  arrivalTimestamp :: Maybe String,
  departure :: String,
  departureTimestamp :: Int,
  delay :: Int,
  platform :: Maybe String,
  prognosis :: Prognosis,
  realtimeAvailability :: Maybe String,
  location :: Location
} deriving (Show)

data Prognosis = Prognosis {
  platform :: Maybe String,
  arrival :: String,
  departure :: String,
  capacity1st :: Maybe String,
  capacity2nd :: Maybe String
} deriving (Show)

data Location = Location {
  id :: String,
  name :: Maybe String,
  score :: Maybe String,
  coordinate :: Coordinate,
  distance :: Maybe String
} deriving (Show)

instance JSON Station where
  readJSON = withObject "Station" $ \v -> Station
      <$> v .: "id"
      <*> v .: "name"
      <*> v .: "score"
      <*> v .: "coordinate"
      <*> v .: "distance"

instance JSON Coordinate where
  readJSON = withObject "Coordinate" $ \v -> Coordinate
      <$> v .: "type"
      <*> v .: "x"
      <*> v .: "y"

-- ... define JSON instances for the rest of your data structures ...

let json = "{\"station\": {\"id\": \"1\", \"name\": \"Station 1\", \"coordinate\": {\"type\": \"Point\", \"x\": 10.0, \"y\": 20.0}}, \"departure\": \"08:00\", \"departureTimestamp\": 1623448000}"
let result = decode json :: Result Stop

case result of
  Ok stop -> do
      let departure = departure stop
      let departureTimestamp = departureTimestamp stop
      -- ... use departure and departureTimestamp ...
  Error msg -> putStrLn msg