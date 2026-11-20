package com.mirmobe.sky.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val NightColorScheme = darkColorScheme(
    primary = Color(0xFFD4A054),
    onPrimary = Color(0xFF1A1206),
    background = Color(0xFF07080C),
    surface = Color(0xFF07080C),
)

@Composable
fun WebShellTheme(
    content: @Composable () -> Unit
) {
    MaterialTheme(
        colorScheme = NightColorScheme,
        typography = Typography,
        content = content
    )
}
