export default {
    port: 1987,
    dbUri: "mongodb://127.0.0.1:27017/express-rest-api",
    saltWorkFactor: 10,
    accessTokenTtl: "15m", 
    refreshTokenTtl: "1y",
    privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC+KMGcGBMyZ6Sx
NCB9j3XGNUY2QnfyfWp2dT2+QpyLwLTlsACF5HUhlecTzF3I/JsEYkq6zYct8Pzq
3UjOhs1+mvuJQ/hi+rtY26WEmGrqRmtfNWR2mfAdskmBGSb7b98RsyqTGRcU5nZf
caEY765XccoccEMo0JPdsS2gkGvtXflCK3a3UkcIWoGHsesVq8ukA4hH/ZhZtpW5
Z7wkXkbCpJ5Gg1wk8Olw4k+LyohLtdBpP8Y2pOfcK37YJOxSUWnFUb9NPihStuYN
QWTiKLHWgEQjZOFlOfBJto0S4PKtIXVUbjbqspadql/IiR/AcVBg4qOoLdeOxMmi
FmbzID3DAgMBAAECggEAT73ylr0ny7LXxvGnkE/JITG0/Er6VsdODlfS6Qaw9A//
K/SW+47WqZtdeBly2LZJYVjAor5Oai8NOIZMIkM4SFfAlIrazdL8HmKZcdWivBSE
sTvIIc4i+akKlucPyE/c+OSrvVy/p6WPTS3u0vCrqQLQMQXIvARfhY9npVX61GIi
9US4Jip1VKfrAOa8uOObvh2UJSrGepBzJUuyGh/EGbGXI/ypClstG+kgrl+NKo44
BM+IL4Nl0RUkWQYhUrCwC+E8bkIv3KIJX/rpTuvMCl+nqy3z3BopYFvf7zwjjUxV
tj1sl116inw9Nosi+ANBXYMMyU79klbWPUQPPRFjVQKBgQDts7eTaewQAct4Cm1t
yWDe6TYGyzcKLikquNraXElr2hE/JswhsGZYg/q1crS090m0v0/o4SNpn2KKcIIk
hb8WylB93xbBsg+84eYh8iGfReimXnJkf+xWy8395TV4clRlu+tJC/IJ2R7UypPV
YHpEO7U08W9ifTLABKikPchX/QKBgQDMzCKVIIqzr/y/dIqyEjJMm2rfDfI9zmmG
dxcOp1hV7qzb6DuRCcZxgUptxI8BFFmaY8Q25cHnROTi7aWGcSPRYBa/QfLJ3eVA
ABS2JIV8q6yBO/uTBeVrrPv0gGHBd4WjTtZy/2fBXYcWqKXhP7NLuO7eum9PBxZW
iZSP74h4vwKBgQDsRAcDInR+UJpifdLZHiIITzvhMtpJZyqKCWWXR8W+yuj7oV+j
WMfR0ZVAB3ywp19+pe4Spr1hPghfXIcvMDWIvJ2XD0h6TLex4cOyGA7tVjpyK0x+
slxCxZ7Bb7NfPhy/ZjLuz03MFiC8F4MrwxKkgciSkCxLc/AexkKtxa8+LQKBgQCF
Ywu/L3PHdv9av5A6TQm/xZZE83NseA1ZDCXTYIFzbsHddROe8svyT7BncBdoL5Xw
rbw1uU2i0Md3WituNjCLBVereEum2USge60BuSXMPpBbl/LSHov/pqpv5FJHTQ6Y
gBfCzMEKO11qD6wC2pdv4WKLZMhso4QUFwXQ/cVYRwKBgQDOplSiBSacjOK0nsLq
HBqa7e6LxlIFmFVBkCfdD+IENFC2wCAdGY6UmFmJKqSngPJosdl0aVPl8Yj30cSf
jZv/NRf+WP7lZwDElJVwAVjbaQYmbfzyI7E8gmHRo99hxaI/n77xue5sgOOYCNsJ
/gnXZm7Tj6+0o5T9fg9d9k6uaA==
-----END PRIVATE KEY-----`,
    publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvijBnBgTMmeksTQgfY91
xjVGNkJ38n1qdnU9vkKci8C05bAAheR1IZXnE8xdyPybBGJKus2HLfD86t1IzobN
fpr7iUP4Yvq7WNulhJhq6kZrXzVkdpnwHbJJgRkm+2/fEbMqkxkXFOZ2X3GhGO+u
V3HKHHBDKNCT3bEtoJBr7V35Qit2t1JHCFqBh7HrFavLpAOIR/2YWbaVuWe8JF5G
wqSeRoNcJPDpcOJPi8qIS7XQaT/GNqTn3Ct+2CTsUlFpxVG/TT4oUrbmDUFk4iix
1oBEI2ThZTnwSbaNEuDyrSF1VG426rKWnapfyIkfwHFQYOKjqC3XjsTJohZm8yA9
wwIDAQAB
-----END PUBLIC KEY-----`
}
