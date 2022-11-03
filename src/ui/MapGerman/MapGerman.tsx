import React from "react";
import './MapGerman.scss';

type Props = {
  color: string,
}

export const MapGerman: React.FC<Props> = ({ color }) => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="120px" height="117px" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
      <g fill={color} transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" stroke="none" className="port__image">
      <path d="M3978 12278 c-9 -7 -31 -47 -48 -88 -18 -41 -40 -95 -51 -120 -33
      -79 -49 -251 -30 -320 5 -19 13 -25 36 -25 l30 0 3 101 3 102 36 -18 c41 -19
      50 -18 106 17 28 18 37 30 35 46 -2 18 -11 23 -43 25 -51 4 -75 26 -75 68 0
      48 18 79 55 97 26 12 33 23 37 51 5 45 2 50 -41 64 -41 14 -34 14 -53 0z"/>
      <path d="M4200 12046 c-5 -13 -14 -27 -19 -31 -6 -3 -11 -30 -11 -59 0 -46 4
      -57 35 -91 26 -30 36 -51 41 -92 5 -39 12 -57 26 -64 11 -6 26 -26 34 -45 8
      -18 28 -43 44 -56 17 -12 30 -27 30 -33 0 -7 11 -29 25 -49 33 -49 32 -67 -10
      -109 -28 -28 -35 -43 -35 -74 0 -48 17 -73 61 -89 l34 -12 -28 -1 c-16 -1 -37
      4 -48 10 -14 7 -36 6 -82 -6 -65 -16 -97 -42 -97 -79 0 -12 -9 -25 -22 -31
      -20 -9 -23 -17 -21 -65 2 -47 7 -59 33 -82 31 -28 92 -39 105 -18 4 6 15 6 30
      0 20 -8 29 -5 46 13 l21 22 -6 -75 c-4 -41 -9 -92 -12 -112 -5 -31 -1 -42 20
      -63 14 -14 37 -25 51 -25 15 0 28 -7 32 -17 3 -10 20 -33 36 -50 34 -37 25
      -41 -38 -18 -67 24 -75 21 -75 -29 0 -26 10 -66 25 -98 14 -29 25 -67 25 -84
      0 -17 9 -43 21 -58 19 -24 26 -26 94 -26 41 0 76 -4 79 -8 7 -12 -157 -42
      -231 -42 l-61 0 -18 46 c-22 59 -50 94 -75 94 -36 0 -95 -71 -124 -150 -63
      -172 -84 -237 -84 -265 -1 -46 27 -115 61 -154 21 -24 27 -36 18 -39 -7 -3
      -20 4 -29 15 -9 11 -29 24 -45 27 -16 4 -47 22 -69 41 -53 45 -119 68 -144 50
      -15 -11 -18 -26 -16 -92 1 -71 0 -76 -14 -58 -8 11 -31 55 -51 97 -23 48 -45
      80 -57 84 -28 9 -35 23 -35 71 0 23 -4 45 -10 48 -5 3 -7 18 -4 33 2 15 1 41
      -4 57 -7 24 -14 30 -38 31 -16 1 -39 6 -51 13 -32 17 -98 14 -114 -5 -11 -14
      -26 -15 -81 -10 -61 5 -68 4 -85 -16 -16 -21 -25 -23 -98 -20 -71 3 -82 1 -97
      -18 -16 -19 -31 -22 -150 -27 -130 -6 -134 -7 -159 -35 -16 -17 -36 -27 -50
      -27 -13 1 -64 -6 -113 -15 -49 -9 -93 -16 -97 -16 -5 0 -9 -22 -9 -48 0 -81
      57 -111 90 -47 8 17 16 32 18 34 1 3 34 8 73 12 44 5 79 15 90 25 12 11 42 18
      91 21 79 5 79 1 4 -38 -56 -30 -146 -118 -146 -142 0 -12 10 -31 21 -43 l22
      -23 -29 -7 c-43 -10 -50 -18 -63 -81 -7 -32 -17 -74 -22 -94 -12 -47 7 -142
      33 -166 16 -14 24 -15 51 -6 20 7 49 8 77 3 25 -4 39 -8 32 -9 -25 -2 -34 -52
      -21 -118 10 -51 10 -70 -1 -103 -12 -35 -11 -48 3 -93 12 -40 15 -74 10 -147
      -6 -99 -23 -144 -96 -251 -21 -31 -26 -55 -35 -171 -6 -74 -14 -141 -17 -149
      -7 -17 -81 -17 -114 1 -18 9 -34 9 -66 1 -24 -6 -60 -11 -79 -11 -25 0 -39 -6
      -50 -22 -19 -27 -21 -89 -4 -106 10 -10 6 -18 -17 -36 -26 -21 -28 -25 -15
      -41 8 -10 13 -29 12 -44 -2 -17 7 -38 26 -60 26 -32 34 -35 85 -36 31 0 59 -4
      63 -8 4 -4 35 -7 70 -7 58 0 63 -2 73 -27 6 -16 16 -35 22 -44 9 -12 8 -29 -6
      -73 -16 -50 -17 -63 -5 -94 10 -27 10 -37 1 -40 -21 -7 -71 -53 -71 -66 0 -6
      -18 -22 -41 -36 -22 -14 -45 -33 -50 -43 -8 -14 -17 -17 -39 -12 -23 5 -35 1
      -55 -19 -14 -14 -25 -32 -25 -39 0 -8 -11 -22 -25 -31 -14 -9 -25 -25 -25 -35
      0 -23 38 -64 78 -85 19 -10 34 -27 38 -42 6 -22 0 -32 -29 -59 -20 -19 -39
      -29 -42 -24 -15 24 -126 -12 -206 -67 -34 -23 -38 -24 -65 -9 -37 19 -48 19
      -91 -1 -33 -16 -35 -16 -50 5 -11 17 -21 21 -40 16 -18 -4 -33 2 -59 25 -40
      34 -56 37 -79 13 -12 -12 -16 -27 -12 -55 6 -42 1 -44 -49 -26 -28 10 -36 9
      -52 -5 -30 -27 -47 -89 -32 -116 9 -19 9 -26 -4 -40 -30 -33 -13 -71 30 -71
      26 0 35 -11 44 -54 5 -24 11 -31 30 -31 23 0 25 -5 30 -55 6 -53 35 -123 63
      -151 40 -40 49 -68 48 -150 0 -78 -2 -84 -36 -127 -19 -25 -35 -53 -35 -63 0
      -10 -14 -32 -30 -49 -25 -25 -30 -39 -30 -77 0 -33 6 -53 21 -69 l20 -22 -48
      -45 c-27 -25 -60 -55 -74 -65 l-25 -20 -23 24 c-28 29 -42 30 -66 4 -27 -30
      -16 -147 16 -173 12 -10 29 -15 37 -12 8 3 28 0 43 -7 22 -10 29 -20 29 -42 0
      -18 10 -38 26 -52 l25 -24 -35 -34 c-42 -39 -43 -49 -13 -141 23 -67 25 -71
      76 -95 37 -18 53 -32 57 -50 9 -42 19 -54 62 -75 23 -11 41 -22 42 -25 0 -3
      -15 -10 -33 -15 -36 -11 -62 -54 -53 -88 3 -12 15 -37 26 -54 18 -31 24 -33
      74 -33 47 0 54 -3 60 -22 3 -13 1 -27 -4 -32 -16 -16 -12 -40 20 -102 16 -32
      30 -59 30 -60 0 0 -13 1 -30 4 -25 4 -32 0 -47 -29 -10 -19 -37 -52 -59 -74
      -91 -88 -115 -124 -115 -174 1 -25 -2 -73 -5 -106 -5 -53 -3 -64 20 -98 14
      -21 26 -47 26 -57 0 -11 11 -27 25 -36 18 -11 25 -25 25 -46 0 -22 10 -40 37
      -66 21 -19 42 -45 48 -56 8 -15 20 -21 47 -21 26 0 41 -7 55 -24 13 -16 29
      -24 49 -23 l29 1 -3 -59 c-3 -48 -7 -60 -23 -65 -23 -8 -44 -47 -52 -99 -4
      -22 -17 -51 -31 -65 -21 -23 -25 -37 -28 -111 l-3 -85 37 -1 c20 -1 48 -8 62
      -18 14 -9 35 -16 46 -16 27 0 60 -55 60 -103 0 -39 27 -77 54 -77 22 0 28 -13
      43 -100 3 -19 12 -39 20 -43 7 -4 13 -15 13 -23 0 -8 11 -32 25 -54 30 -48 88
      -69 133 -48 22 11 28 21 32 58 4 32 10 46 22 48 31 6 61 -26 78 -80 19 -63 53
      -83 98 -57 24 13 30 13 62 -4 34 -18 47 -18 120 0 28 7 36 14 38 36 3 26 5 27
      68 27 56 0 64 -2 64 -19 0 -12 21 -33 58 -57 31 -21 69 -51 85 -67 23 -25 32
      -28 60 -23 71 15 131 13 161 -5 17 -10 40 -16 52 -13 12 3 39 -3 62 -15 48
      -24 94 -27 111 -7 10 12 16 12 41 -1 17 -8 39 -12 50 -8 11 3 20 4 20 0 0 -14
      -40 -82 -55 -95 -9 -8 -30 -43 -46 -79 -35 -77 -53 -99 -96 -117 -25 -11 -35
      -24 -48 -65 -11 -31 -39 -77 -73 -117 -53 -63 -82 -126 -82 -180 0 -14 -9 -39
      -19 -56 -11 -17 -26 -77 -35 -134 -10 -63 -24 -114 -36 -130 -10 -15 -25 -52
      -34 -82 -8 -30 -32 -80 -52 -110 l-36 -55 7 -100 c12 -152 10 -184 -14 -260
      -13 -38 -25 -99 -28 -135 -3 -40 -13 -75 -24 -92 -27 -37 -24 -70 12 -114 17
      -22 42 -60 55 -85 12 -26 30 -49 39 -53 9 -3 14 -10 10 -15 -8 -14 35 -41 67
      -41 47 0 106 29 112 56 4 13 13 24 20 24 8 0 21 3 29 6 10 3 20 -8 31 -36 l17
      -42 82 3 c80 4 84 5 133 47 63 53 103 56 149 12 31 -30 33 -30 105 -24 66 7
      74 10 89 35 9 16 21 29 28 29 6 0 14 14 18 31 8 35 -17 69 -66 89 l-29 12 35
      39 c19 22 35 44 35 49 0 6 10 10 22 10 12 0 29 7 39 16 16 15 19 14 31 -5 7
      -12 20 -21 28 -21 28 -1 50 -27 50 -58 0 -37 22 -52 75 -52 22 0 38 6 41 15 8
      19 24 9 24 -14 0 -48 97 -75 137 -38 25 22 60 22 134 -3 36 -12 83 -20 117
      -19 61 1 136 -20 192 -55 19 -11 53 -28 75 -36 34 -13 41 -20 46 -53 9 -57 18
      -62 88 -47 66 14 73 19 88 65 5 17 14 30 19 30 5 0 13 -13 19 -30 13 -41 21
      -44 83 -40 49 3 54 1 63 -22 6 -15 24 -31 48 -40 46 -18 58 -39 36 -63 -8 -9
      -15 -32 -15 -52 0 -42 27 -58 95 -58 l45 0 0 -55 0 -55 54 0 c30 0 58 5 61 10
      3 6 15 10 25 10 18 0 103 101 118 139 3 9 14 23 24 31 14 11 19 31 21 75 1 33
      -2 68 -7 77 -7 16 -4 17 23 12 21 -4 43 0 71 15 57 30 90 27 122 -9 20 -23 35
      -30 63 -30 27 0 42 -6 56 -24 11 -14 29 -26 41 -28 23 -3 29 -11 59 -82 l21
      -48 81 7 c45 4 91 14 104 22 22 15 25 15 39 -6 20 -28 41 -27 86 4 20 14 46
      25 56 25 10 0 34 10 53 23 27 18 34 30 35 57 0 19 2 34 5 34 2 -1 28 -5 57 -9
      62 -8 73 -1 92 55 7 22 19 45 27 52 13 11 160 12 188 2 7 -3 23 5 35 18 20 22
      30 23 168 26 81 2 153 9 160 14 14 12 16 64 3 72 -12 8 -20 55 -10 61 4 3 9
      -5 11 -17 3 -20 11 -24 63 -31 59 -8 85 -6 116 7 12 5 20 -1 29 -24 24 -59 97
      -70 144 -21 36 38 94 49 130 26 33 -22 42 -52 22 -74 -9 -10 -16 -27 -16 -39
      0 -21 43 -62 64 -62 7 0 32 -20 56 -45 24 -25 51 -45 60 -45 9 0 25 -7 36 -15
      53 -40 104 7 104 97 1 31 7 61 15 72 8 11 15 28 15 38 0 10 5 26 11 37 16 24
      4 84 -21 106 -11 10 -20 26 -20 35 0 22 -44 70 -65 70 -13 0 -11 7 10 37 14
      21 25 43 25 51 0 33 -60 140 -99 174 -22 20 -41 45 -41 55 0 20 -28 55 -54 70
      -8 5 -18 26 -21 48 -5 36 -2 44 35 87 23 27 50 48 61 48 35 0 76 28 87 59 8
      21 19 32 39 36 15 3 48 10 73 15 25 5 74 13 110 16 70 8 66 5 163 112 33 37
      37 48 37 94 0 35 6 58 17 71 12 12 18 37 19 73 1 30 4 58 8 62 4 3 21 -1 37
      -11 17 -9 41 -17 54 -17 14 0 40 -13 58 -30 48 -42 83 -40 104 5 10 21 24 35
      35 35 9 0 25 14 33 30 18 36 29 159 16 192 -6 17 -5 30 5 43 19 25 18 38 -6
      87 -11 23 -20 50 -20 60 0 10 -9 26 -20 35 -11 10 -20 22 -20 29 0 19 -35 44
      -62 44 -18 0 -36 12 -57 37 -17 21 -37 46 -45 55 -20 23 -84 34 -109 19 -16
      -11 -23 -9 -43 10 -13 12 -21 25 -19 29 11 18 -19 82 -50 106 -19 15 -35 32
      -35 39 0 25 -31 45 -69 45 -42 0 -53 10 -91 84 -14 27 -42 62 -62 79 -24 19
      -38 39 -38 53 0 54 -110 124 -191 122 -43 0 -49 3 -117 70 -69 67 -72 72 -72
      116 0 42 -4 51 -41 86 l-41 39 3 118 4 118 -47 -3 c-28 -2 -48 1 -48 7 0 17
      30 103 56 158 30 65 30 87 -1 111 -15 12 -25 30 -25 46 0 16 -6 26 -15 26 -8
      0 -15 6 -15 13 0 20 -29 43 -71 56 -20 7 -45 21 -54 31 -10 11 -24 20 -32 20
      -7 0 -13 4 -13 10 0 5 -13 25 -30 43 -23 27 -30 44 -30 77 0 41 1 42 18 27 22
      -20 63 -22 80 -5 7 7 12 29 12 50 0 41 18 89 37 101 7 4 13 16 13 25 0 9 17
      28 38 41 52 35 62 49 62 94 0 38 1 39 28 32 15 -4 54 -9 87 -11 52 -4 62 -1
      76 18 23 30 94 34 127 7 16 -12 41 -19 67 -19 35 0 48 6 78 37 25 25 37 45 37
      65 0 25 3 28 38 30 20 0 50 2 65 2 31 2 65 38 93 99 10 21 22 36 28 34 14 -5
      59 17 76 38 12 14 14 13 24 -6 18 -36 40 -44 75 -30 32 14 55 49 76 116 10 33
      17 41 41 43 16 2 37 11 47 20 11 10 31 15 48 13 17 -1 36 2 43 8 8 7 24 7 49
      0 28 -8 43 -6 66 6 34 17 61 51 61 78 0 9 7 20 15 22 8 3 23 8 33 11 9 4 33 8
      52 9 40 2 152 43 193 69 15 10 27 26 27 35 0 13 7 16 33 13 53 -6 114 14 121
      41 14 52 7 74 -34 102 -22 15 -40 34 -40 41 0 7 -13 15 -28 19 -15 3 -33 14
      -40 25 -11 18 -10 20 19 20 18 0 46 -9 63 -20 28 -16 41 -18 86 -11 66 10 70
      9 92 -30 13 -22 16 -42 12 -69 -5 -32 -3 -40 15 -49 15 -8 20 -20 19 -46 -1
      -33 15 -65 33 -65 5 0 30 -14 56 -30 26 -17 60 -30 75 -30 37 0 78 40 78 76 0
      15 16 46 39 75 21 26 44 70 51 96 8 26 24 62 36 78 25 33 43 119 50 234 2 40
      9 81 14 91 15 27 12 83 -5 107 -23 33 -47 132 -45 189 2 86 -7 98 -125 155
      -58 28 -105 52 -105 53 0 1 9 21 20 44 11 22 20 48 20 57 0 9 5 25 11 37 18
      34 3 63 -51 92 -59 32 -70 49 -70 110 0 33 -6 51 -20 64 -18 17 -19 21 -6 32
      9 6 36 44 62 82 41 62 45 75 40 109 -5 31 -2 43 19 67 34 41 32 60 -15 107
      -44 45 -43 41 -35 192 7 114 7 114 -65 123 l-45 5 -12 105 -13 105 27 49 c21
      41 24 52 14 68 -10 16 -8 26 8 54 41 70 23 135 -46 165 -25 11 -51 26 -57 33
      -6 7 -30 27 -54 45 -23 18 -49 47 -56 65 -17 40 -52 76 -73 76 -9 0 -40 22
      -69 50 -30 28 -62 50 -75 50 -18 0 -20 4 -14 23 4 12 10 50 12 84 4 54 8 64
      31 79 15 9 53 40 85 67 77 66 109 135 105 223 -2 54 1 65 30 104 43 59 44 112
      2 165 -25 32 -30 47 -30 94 0 65 -23 168 -47 214 -10 19 -18 60 -19 102 -4
      105 -15 173 -30 186 -9 7 -14 32 -14 63 0 29 -5 57 -12 64 -15 15 -54 16 -63
      2 -8 -13 -109 -13 -133 -1 -9 5 -39 19 -67 31 -74 32 -77 34 -86 58 -7 20 -5
      22 22 22 16 0 42 8 56 18 20 13 48 17 113 17 92 1 110 6 110 34 0 10 7 35 15
      54 26 62 21 70 -69 136 -46 34 -90 69 -97 78 -8 8 -53 42 -100 74 -64 42 -93
      70 -111 101 -30 55 -72 73 -97 42 -15 -19 -20 -20 -36 -8 -10 8 -27 14 -37 14
      -10 0 -21 7 -24 15 -8 19 -42 19 -63 1 -9 -7 -37 -23 -64 -34 l-47 -21 -33 29
      c-18 16 -45 32 -60 36 -42 10 -26 29 20 26 54 -4 71 16 54 63 -8 23 -9 40 -2
      52 12 24 119 84 126 72 4 -5 15 -9 25 -9 14 0 20 -9 22 -37 2 -30 9 -41 31
      -51 24 -12 31 -11 52 2 47 31 79 134 51 165 -8 9 -16 36 -18 61 l-3 45 -57 0
      c-71 0 -87 13 -62 49 11 14 27 28 37 31 13 5 17 19 19 61 1 30 2 64 2 76 1 17
      -10 26 -47 41 -47 19 -48 19 -82 1 -29 -15 -39 -17 -55 -6 -11 6 -31 12 -45
      12 -30 0 -43 -37 -25 -70 10 -19 9 -21 -7 -18 -41 8 -30 127 13 147 28 13 64
      67 64 97 0 43 -21 46 -124 20 -110 -29 -139 -45 -156 -86 -15 -35 -7 -60 20
      -67 24 -6 24 -6 5 -42 -11 -23 -19 -27 -40 -24 -14 3 -32 0 -40 -7 -12 -10
      -12 -17 -1 -44 11 -27 11 -35 0 -51 -31 -42 -10 -141 33 -151 13 -4 23 -10 23
      -14 0 -5 3 -16 7 -26 5 -15 2 -16 -33 -10 -21 4 -46 14 -55 22 -8 8 -21 14
      -27 14 -7 0 -12 15 -12 34 0 50 -20 61 -66 36 -48 -25 -60 -25 -67 0 -5 21
      -20 23 -207 24 -34 1 -66 7 -81 17 -35 23 -122 34 -136 17 -5 -7 -20 -39 -33
      -71 -13 -32 -34 -65 -47 -74 -15 -10 -25 -29 -29 -54 -4 -21 -13 -44 -20 -50
      -8 -6 -14 -17 -14 -24 0 -8 -17 -24 -37 -36 -21 -12 -68 -52 -105 -88 -58 -58
      -71 -65 -100 -63 -20 2 -63 -9 -108 -27 -58 -24 -91 -31 -145 -32 -121 -1
      -166 -12 -198 -50 -22 -27 -28 -42 -26 -76 3 -39 0 -44 -35 -68 -29 -19 -41
      -23 -51 -15 -10 8 -20 8 -37 -1 -13 -7 -29 -15 -36 -18 -14 -6 -36 -42 -46
      -73 -4 -13 -16 -18 -40 -18 -26 0 -34 4 -30 14 6 16 -21 46 -43 46 -8 0 -24
      11 -35 25 -14 18 -29 25 -53 25 -19 0 -46 5 -61 10 -34 13 -118 -18 -150 -56
      l-21 -25 -48 26 c-60 31 -70 45 -44 63 10 7 19 20 19 28 0 16 16 19 25 4 3 -5
      17 -10 31 -10 18 0 29 9 41 35 9 19 20 35 24 35 15 0 130 113 145 143 12 23
      14 49 8 127 -6 97 -6 100 20 130 14 17 26 36 26 41 0 5 9 9 19 9 11 0 23 5 26
      10 4 7 12 7 25 0 26 -14 63 -12 85 4 18 13 18 16 -9 99 -16 48 -34 91 -41 97
      -7 6 -50 26 -95 45 -69 29 -86 32 -108 23 -15 -6 -41 -10 -58 -9 -57 4 -80
      -57 -49 -124 24 -50 52 -75 85 -75 23 0 30 -5 30 -20 0 -18 -7 -19 -67 -19
      -86 1 -112 -10 -152 -60 -35 -44 -50 -54 -93 -65 -23 -5 -38 3 -105 64 -43 39
      -89 73 -103 76 -14 3 -41 14 -60 24 -20 10 -47 21 -62 24 -14 2 -35 9 -46 15
      -34 18 -64 13 -94 -16 -19 -18 -28 -22 -28 -12 0 8 -21 34 -45 58 -41 41 -49
      45 -95 45 -27 0 -50 4 -50 8 0 5 10 22 22 39 20 26 22 43 25 164 2 134 2 135
      -22 151 -18 12 -25 25 -25 48 0 23 -11 42 -42 74 -45 47 -81 53 -86 15 -2 -12
      -9 -27 -17 -33 -10 -8 -18 -3 -34 23 -19 31 -57 57 -83 57 -6 0 -16 7 -23 16
      -17 24 -78 42 -132 39 -27 -2 -72 -4 -101 -4 -43 -1 -57 -6 -76 -26 -46 -50
      -130 -26 -151 43 -9 32 -53 51 -90 40 -41 -11 -68 -3 -110 33 -33 30 -37 30
      -100 24 -36 -4 -68 -11 -71 -16 -9 -15 -99 -10 -120 6 -10 8 -36 15 -57 15
      -31 0 -39 -4 -47 -24z m4638 -663 c-2 -10 -10 -18 -18 -18 -8 0 -16 8 -18 18
      -2 12 3 17 18 17 15 0 20 -5 18 -17z m-981 -290 c-13 -21 -33 -39 -43 -41 -18
      -3 -18 -2 -1 8 9 6 24 24 32 40 9 17 20 30 25 30 6 0 0 -17 -13 -37z m-4290
      -930 c12 -2 24 -11 27 -19 4 -10 -4 -14 -32 -14 -20 0 -68 -7 -107 -15 -38 -8
      -87 -15 -107 -15 -20 0 -39 -4 -42 -9 -3 -4 -27 -11 -54 -15 -27 -3 -57 -12
      -67 -20 -16 -11 -27 -11 -69 0 -28 8 -61 14 -73 14 -12 0 -24 4 -27 9 -3 5 20
      7 53 5 47 -3 63 0 84 16 16 13 40 20 69 20 25 0 48 3 51 7 4 3 17 8 30 9 82
      10 142 25 145 34 4 11 57 8 119 -7z m299 -413 c37 0 45 -18 19 -40 -8 -7 -20
      -30 -27 -52 -10 -33 -13 -37 -21 -21 -22 41 -51 63 -84 63 -18 0 -33 5 -33 10
      0 6 12 10 28 10 33 0 45 8 63 40 11 21 14 22 17 8 2 -13 13 -18 38 -18z m3724
      -4940 c0 -12 11 -31 25 -44 14 -13 25 -29 25 -36 0 -8 7 -21 15 -30 8 -9 12
      -25 9 -37 -6 -22 -7 -21 -30 6 -13 16 -24 34 -24 39 0 6 -8 17 -17 24 -18 13
      -27 98 -11 98 4 0 8 -9 8 -20z"/>
      <path d="M4025 11783 c-46 -5 -65 -18 -65 -45 0 -10 -4 -16 -10 -13 -15 9 -90
      -77 -90 -104 0 -13 14 -40 30 -60 17 -20 35 -42 41 -48 17 -22 52 -14 93 21
      30 26 37 37 31 54 -4 16 -14 22 -36 22 -22 0 -32 6 -38 23 -5 12 -7 24 -5 26
      1 1 22 -7 46 -19 31 -15 57 -20 93 -18 46 3 51 6 67 38 18 36 16 93 -4 118
      -10 12 -65 14 -153 5z"/>
      <path d="M4207 11632 c-10 -11 -34 -22 -53 -25 -45 -8 -64 -23 -64 -54 0 -34
      23 -38 93 -16 36 12 66 17 72 12 15 -14 61 -10 75 6 20 25 8 50 -25 50 -22 0
      -32 6 -35 20 -8 27 -42 30 -63 7z"/>
      <path d="M4015 11488 c-3 -13 -5 -59 -5 -103 1 -44 0 -97 0 -118 -2 -46 14
      -67 51 -67 31 0 69 30 69 55 0 9 -12 28 -26 42 -14 14 -22 28 -16 32 5 3 12
      27 16 53 8 51 30 58 33 12 1 -33 34 -78 59 -83 50 -10 119 67 112 126 -5 41
      -31 51 -73 29 -19 -11 -36 -17 -38 -15 -2 2 -11 16 -20 32 -16 25 -22 27 -87
      27 -64 0 -70 -2 -75 -22z"/>
      <path d="M4230 10680 c-6 -12 -10 -31 -8 -43 2 -18 10 -22 38 -22 34 0 35 1
      35 40 0 36 -3 40 -27 43 -19 2 -30 -3 -38 -18z"/>
      <path d="M3996 10511 c-10 -11 -16 -30 -14 -43 2 -19 9 -23 34 -22 27 1 30 -1
      26 -22 -3 -18 1 -24 22 -30 32 -8 54 0 63 21 9 24 -14 65 -36 65 -12 0 -21 9
      -25 25 -8 31 -45 34 -70 6z"/>
      <path d="M3750 10143 c-38 -13 -55 -75 -24 -87 27 -10 44 -7 74 16 34 25 39
      53 11 68 -21 11 -37 12 -61 3z"/>
      <path d="M2353 9955 c-51 -23 -60 -36 -47 -70 9 -21 60 -41 112 -43 38 -2 42
      0 42 22 0 17 7 26 25 30 19 5 25 13 25 35 0 24 -6 31 -31 40 -45 16 -67 13
      -126 -14z"/>
      </g>
    </svg>
  );
};
